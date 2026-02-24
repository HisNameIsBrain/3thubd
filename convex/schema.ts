import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  objects: defineTable({
    name: v.string(),
    type: v.string(), // e.g., "cube", "sphere"
    position: v.array(v.number()), // [x, y, z]
    rotation: v.array(v.number()), // [x, y, z]
    scale: v.array(v.number()), // [x, y, z]
    color: v.string(),
    userId: v.string(),
  }).index("by_user", ["userId"]),
});
