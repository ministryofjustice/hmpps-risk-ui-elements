# Risk predictor timeline

## Arguments

**Component**
|Name|Type|Required|Description|
|---|---|---|---|
|timeline|TimelineItem[]|Yes|collection of historical risk data sorted by date (asc/desc)|

**TimelineItem**
|Name|Type|Required|Description|
|---|---|---|---|
|date|Date|Yes|the date the risks were calculated|
|scores|Scores|Yes|a map of RSR, OSP/C, and OSP/I scores|

**Scores**
|Name|Type|Required|Description|
|---|---|---|---|
|RSR|Score|Yes|the RSR score|
|OSPC|Score|Yes|the OSP/C score|
|OSPI|Score|Yes|the OSP/I score|

**Score**
|Name|Type|Required|Description|
|---|---|---|---|
|level|RiskLevel|Yes|the level of risk|
|score|Number|Yes|the numerical risk score|
|type|String|Yes|the risk type that will be displayed|


where risk levels can be `LOW`, `MEDIUM`, `HIGH`, or `VERY_HIGH`

## Example

**Below is a typical example of this component in use**

```nunjucks
{% from "components/predictor-timeline/macro.njk" import predictorTimeline %}

<div id="predictor-scores-history" class="govuk-grid-column-one-third">
    <div class="govuk-body predictor-timeline__heading">
        <h2 class="govuk-heading-l">Scores history</h2>
        <a id="predictor-timeline__toggle-all" href="#" class="govuk-link">Open all</a>
    </div>
    {{ predictorTimeline([
      {
        "date": "14 May 2019 at 12:00:00",
        "scores": {
          "RSR": {
            "level": "HIGH",
            "score": 10.3,
            "type": "RSR"
          },
          "OSPC": {
            "level": "MEDIUM",
            "score": 7.76,
            "type": "OSP/C"
          },
          "OSPI": {
            "level": "LOW",
            "score": 3.45,
            "type": "OSP/I"
          }
        }
      },
      {
        "date": "12 September 2018 at 12:00:00",
        "scores": {
          "RSR": {
            "level": "MEDIUM",
            "score": 5.34,
            "type": "RSR"
          },
          "OSPC": {
            "level": "MEDIUM",
            "score": 6.76,
            "type": "OSP/C"
          },
          "OSPI": {
            "level": "LOW",
            "score": 3.45,
            "type": "OSP/I"
          }
        }
      }
    ]) }}
</div>
```

<img src="screenshots/predictor_timeline.png" width=30% height=30%>

## Usage

### When to use
TODO

### When not to use
TODO

## Research
TODO
