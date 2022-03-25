# hmpps-risk-ui-elements
Templates and styles for displaying consistent risk information UI elements in HMPPS services. 

These can be used in a similar way to other components in the govuk and MoJ frontend system.

# Examples
## Risk scores

Given that the `predictorScores` data is as follows:
```
{
      current: {
        date: '23 Jul 2021 at 12:00:00',
        scores: {
          RSR: {
            level: 'HIGH',
            score: 11.34,
            type: 'RSR',
          },
          OSPC: {
            level: 'MEDIUM',
            score: 8.76,
            type: 'OSP/C',
          },
          OSPI: {
            level: 'LOW',
            score: 3.45,
            type: 'OSP/I',
          },
        },
      },
      historical: [
        {
          scores: {
            RSR: {
              level: 'HIGH',
              score: 10.3,
              type: 'RSR',
            },
            OSPC: {
              level: 'MEDIUM',
              score: 7.76,
              type: 'OSP/C',
            },
            OSPI: {
              level: 'LOW',
              score: 3.45,
              type: 'OSP/I',
            },
          },
        },
        {
          scores: {
            RSR: {
              level: 'MEDIUM',
              score: 5.34,
              type: 'RSR',
            },
            OSPC: {
              level: 'MEDIUM',
              score: 6.76,
              type: 'OSP/C',
            },
            OSPI: {
              level: 'LOW',
              score: 3.45,
              type: 'OSP/I',
            },
          },
        },
      ],
    }
```
This code would display the scores as in the screenshot below:
```
{% from "common/templates/components/predictor-score/macro.njk" import predictorScore %}
{% from "common/templates/components/predictor-timeline/macro.njk" import predictorTimeline %}

<div class="govuk-grid-row">
    <div id="predictor-scores" class="govuk-grid-column-two-thirds">
        <div class="govuk-grid-row">
            <div class="govuk-grid-column-full">
                <h2 class="govuk-heading-l score-header">RSR score</h2>
                {{ predictorScore(predictorScores.current.scores.RSR) }}
            </div>
        </div>
        <div class="govuk-grid-row">
            <div class="govuk-grid-column-one-half">
                <h2 class="govuk-heading-l score-header">OSP/C score</h2>
                {{ predictorScore(predictorScores.current.scores.OSPC) }}
            </div>
            <div class="govuk-grid-column-one-half">
                <h2 class="govuk-heading-l score-header">OSP/I score</h2>
                {{ predictorScore(predictorScores.current.scores.OSPI) }}
            </div>
        </div>
    </div>
    {% if predictorScores.historical.length %}
    <div id="predictor-scores-history" class="govuk-grid-column-one-third">
        <div class="govuk-body predictor-timeline__heading">
            <h2 class="govuk-heading-l">Scores history</h2>
            <a id="predictor-timeline__toggle-all" href="#" class="govuk-link">Open all</a>
        </div>
        {{ predictorTimeline(predictorScores.historical) }}
    </div>
    {% endif %}
</div>

```
![Risk scores](./images/risk_scores.png)

---
## Risk Widgets

Given `widgetData` that looks like this:

```
{
  "mappa": {
    "level": "CAT 2/LEVEL 1",
    "isNominal": false,
    "lastUpdated": "10th October 2021"
  },
  "flags": [
    "Hate Crime"
  ],
  "roshRiskSummary": {
    "overallRisk": "VERY_HIGH",
    "riskToChildren": "LOW",
    "riskToPublic": "VERY_HIGH",
    "riskToKnownAdult": "MEDIUM",
    "riskToStaff": "HIGH",
    "lastUpdated": "10th October 2021"
  }
}
```
This code would display the risk widgets as in the screenshot below:
```
{% from "common/templates/components/widgets/macro.njk" import widgets %}

<div class="govuk-grid-column-one-quarter">
    {{ widgets(widgetData) }}
</div>
```
![Risk widgets](./images/risk_widgets.png)
