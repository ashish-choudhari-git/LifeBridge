const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/stock", async (req, res) => {
  try {
    const { stateCode, districtCode, bloodGroup, bloodComponent } = req.query;

    if (!stateCode || !districtCode) {
      return res.status(400).json({ error: "State and District are required." });
    }

    const apiUrl = `https://eraktkosh.mohfw.gov.in/BLDAHIMS/bloodbank/nearbyBB.cnt`;
    
    const response = await axios.get(apiUrl, {
      params: {
        hmode: "GETNEARBYSTOCKDETAILS",
        stateCode,
        districtCode,
        bloodGroup: bloodGroup || 'all',
        bloodComponent: bloodComponent || 'all',
        lang: 0,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching from eRaktKosh:", error.message);
    res.status(500).json({ error: "Failed to fetch blood stock data" });
  }
});

module.exports = router; 