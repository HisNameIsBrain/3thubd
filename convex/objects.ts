import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return [];
    }
    return await ctx.db
      .query("objects")
      .withIndex("by_user", (q) => q.eq("userId", identity.subject))
      .collect();
  },
});

export const add = mutation({
  args: {
    name: v.string(),
    type: v.string(),
    position: v.array(v.number()),
    rotation: v.array(v.number()),
    scale: v.array(v.number()),
    color: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated");
    }
    return await ctx.db.insert("objects", {
      ...args,
      userId: identity.subject,
    });
  },
});

export const remove = mutation({
  args: { id: v.id("objects") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated");
    }
    const object = await ctx.db.get(args.id);
    if (!object || object.userId !== identity.subject) {
      throw new Error("Unauthorized");
    }
    await ctx.db.delete(args.id);
  },
});
