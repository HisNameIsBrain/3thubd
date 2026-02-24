import { mutation } from "./_generated/server";

/**
 * A placeholder mutation for the 'Sync' action.
 * In a real application, this would perform a meaningful backend task.
 */
export const syncAction = mutation({
  handler: async (ctx) => {
    // For now, it just logs to the console to confirm it was called.
    console.log("Sync action triggered from the backend!");
    
    // It returns a success message with the current timestamp.
    return `Successfully synced at ${new Date().toISOString()}`;
  },
});
