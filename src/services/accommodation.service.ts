/**
 * Accommodation service stub
 * This will be implemented when LekkerSlaap or other accommodation API integration is added
 */

export const accommodationService = {
  /**
   * Search accommodations (stub)
   */
  async searchAccommodations(
    _location: string,
    _checkIn: string,
    _checkOut: string,
    _guests: number
  ): Promise<any[]> {
    throw new Error('Accommodation API integration not yet implemented');
  },

  /**
   * Get accommodation details (stub)
   */
  async getAccommodationDetails(_id: string): Promise<any> {
    throw new Error('Accommodation API integration not yet implemented');
  },
};
