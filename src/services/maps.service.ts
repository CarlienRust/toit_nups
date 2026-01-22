/**
 * Maps service stub
 * This will be implemented when map integration is added
 */

export const mapsService = {
  /**
   * Initialize map (stub)
   */
  async initializeMap(_containerId: string, _center: { lat: number; lng: number }): Promise<void> {
    throw new Error('Map integration not yet implemented');
  },

  /**
   * Add marker to map (stub)
   */
  async addMarker(_lat: number, _lng: number, _title: string): Promise<void> {
    throw new Error('Map integration not yet implemented');
  },

  /**
   * Get directions (stub)
   */
  async getDirections(_from: { lat: number; lng: number }, _to: { lat: number; lng: number }): Promise<any> {
    throw new Error('Map integration not yet implemented');
  },
};
