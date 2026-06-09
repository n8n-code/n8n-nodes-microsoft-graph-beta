import type { INodeProperties } from 'n8n-workflow';

export const solutionsActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Actions"
					]
				}
			},
			"options": [
				{
					"name": "Solutions Business Scenarios Business Scenario Planner Get Plan",
					"value": "Solutions Business Scenarios Business Scenario Planner Get Plan",
					"action": "Invoke action getPlan",
					"description": "Get information about the plannerPlan mapped to a given target. If a **plannerPlan** doesn't exist for the specified target at the time of the request, a new plan will be created for the businessScenario.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/solutions/businessScenarios/{{$parameter[\"businessScenario-id\"]}}/planner/microsoft.graph.getPlan"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /solutions/businessScenarios/{businessScenario-id}/planner/microsoft.graph.getPlan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Actions"
					],
					"operation": [
						"Solutions Business Scenarios Business Scenario Planner Get Plan"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "target",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Actions"
					],
					"operation": [
						"Solutions Business Scenarios Business Scenario Planner Get Plan"
					]
				}
			}
		},
];
