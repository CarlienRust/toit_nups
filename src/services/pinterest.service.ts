/**
 * Pinterest service stub
 * This will be implemented when Pinterest OAuth/API integration is added
 */

export const pinterestService = {
  /**
   * Authenticate with Pinterest (stub)
   */
  async authenticate(): Promise<void> {
    throw new Error('Pinterest integration not yet implemented');
  },

  /**
   * Search for wedding inspiration (stub)
   */
  async searchInspiration(_query: string): Promise<any[]> {
    throw new Error('Pinterest integration not yet implemented');
  },

  /**
   * Save pin to board (stub)
   */
  async savePin(_pinId: string, _boardId: string): Promise<void> {
    throw new Error('Pinterest integration not yet implemented');
  },
};
