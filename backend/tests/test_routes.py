import unittest
from app.main import app

class ProjectRouteTests(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()

    def test_get_projects(self):
        response = self.client.get('/api/projects')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Project Alpha", response.data)
        
    def test_post_contact(self):
        payload = {
            "name": "Tussar",
            "email": "tussar@example.com",
            "message": "Testing contact form"
        }
        response = self.client.post("/api/contact", json=payload)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Thanks for reaching out", response.data)

if __name__ == '__main__':
    unittest.main()
