import { describe, it, expect } from 'vitest';
import axios from 'axios';

describe('GitHub Token Verification', () => {
  it('should successfully authenticate with GitHub API', async () => {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      throw new Error('GITHUB_TOKEN is not set');
    }

    try {
      const response = await axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('login');
    } catch (error: any) {
      if (error.response) {
        throw new Error(`GitHub API Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
      }
      throw error;
    }
  });
});
