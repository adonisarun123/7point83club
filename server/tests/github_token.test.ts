import { describe, it, expect } from 'vitest';
import axios from 'axios';

describe('GitHub Token Validation', () => {
  it('should be able to authenticate with GitHub API', async () => {
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
      console.log('Authenticated as:', response.data.login);
    } catch (error: any) {
      console.error('GitHub Authentication Failed:', error.response?.data || error.message);
      throw error;
    }
  });
});
