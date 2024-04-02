const axios = require('axios');
const apiCaller = async (req, res, type) => {

    try {
      const responses = await Promise.all([
        axios.get(`https://www.boredapi.com/api/activity?type=${type}&participants=1`),
        axios.get(`https://www.boredapi.com/api/activity?type=${type}&participants=1`),
        axios.get(`https://www.boredapi.com/api/activity?type=${type}&participants=1`),
      ]);
      const fetchedActivities = responses.map(response => response.data);
      res.json(fetchedActivities);
  
    } catch (error) {
      console.error('Error fetching activities:', error);
      res.status(500).json({ error: 'An error occurred while fetching activities' });
    }
  }

 module.exports = apiCaller;