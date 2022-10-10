const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/scores', function (req, res) {
  const riskScores = {
    current: {
      date: '23 Jul 2021 at 12:00:00',
      scores: {
        RSR: {
          level: 'HIGH',
          score: 11.34,
          type: 'RSR'
        },
        OSPC: {
          level: 'MEDIUM',
          score: 8.76,
          type: 'OSP/C'
        },
        OSPI: {
          level: 'LOW',
          score: 3.45,
          type: 'OSP/I'
        }
      }
    },
    historical: [
      {
        date: '14 May 2019 at 12:00:00',
        scores: {
          RSR: {
            level: 'HIGH',
            score: 10.3,
            type: 'RSR'
          },
          OSPC: {
            level: 'MEDIUM',
            score: 7.76,
            type: 'OSP/C'
          },
          OSPI: {
            level: 'LOW',
            score: 3.45,
            type: 'OSP/I'
          }
        }
      },
      {
        date: '12 September 2018 at 12:00:00',
        scores: {
          RSR: {
            level: 'MEDIUM',
            score: 5.34,
            type: 'RSR'
          },
          OSPC: {
            level: 'MEDIUM',
            score: 6.76,
            type: 'OSP/C'
          },
          OSPI: {
            level: 'LOW',
            score: 3.45,
            type: 'OSP/I'
          }
        }
      }
    ]
  }

  const widgetData = {
    roshRiskSummary: {
      hasBeenCompleted: true,
      overallRisk: 'VERY_HIGH',
      riskInCommunity: {
        'Children': 'LOW',
        'Public': 'VERY_HIGH',
        'Known Adult': 'MEDIUM',
        'Staff': 'HIGH'
      },
      riskInCustody: {
        'Children': 'LOW',
        'Public': 'VERY_HIGH',
        'Known Adult': 'MEDIUM',
        'Staff': 'HIGH',
        'Prisoners': 'MEDIUM'
      },
      lastUpdated: '10th October 2021'
    },
    mappa: {
      level: 'CAT 2/LEVEL 1',
      isNominal: false,
      lastUpdated: '10th October 2021'
    },
    flags: [
      'Hate Crime'
    ]
  }

  res.render('scores', { riskScores, widgetData })
})

module.exports = router
