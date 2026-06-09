import type { INodeProperties } from 'n8n-workflow';

export const solutionsSolutionsRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Solutions Root"
					]
				}
			},
			"options": [
				{
					"name": "Solutions Solutions Root Get Solutions Root",
					"value": "Solutions Solutions Root Get Solutions Root",
					"action": "Get solutions",
					"description": "Get solutions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/solutions"
						}
					}
				},
				{
					"name": "Solutions Solutions Root Update Solutions Root",
					"value": "Solutions Solutions Root Update Solutions Root",
					"action": "Update solutions",
					"description": "Update solutions",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/solutions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /solutions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Solutions Root"
					],
					"operation": [
						"Solutions Solutions Root Get Solutions Root"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Solutions Root"
					],
					"operation": [
						"Solutions Solutions Root Get Solutions Root"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Solutions Root"
					],
					"operation": [
						"Solutions Solutions Root Get Solutions Root"
					]
				}
			}
		},
		{
			"displayName": "PATCH /solutions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Solutions Root"
					],
					"operation": [
						"Solutions Solutions Root Update Solutions Root"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Solutions Root"
					],
					"operation": [
						"Solutions Solutions Root Update Solutions Root"
					]
				}
			}
		},
		{
			"displayName": "Business Scenarios",
			"name": "businessScenarios",
			"type": "json",
			"default": "[\n  {\n    \"createdBy\": {\n      \"application\": {},\n      \"device\": {},\n      \"user\": {}\n    },\n    \"lastModifiedBy\": {},\n    \"ownerAppIds\": [\n      null\n    ],\n    \"planner\": {\n      \"planConfiguration\": {\n        \"buckets\": [\n          {}\n        ],\n        \"createdBy\": {},\n        \"lastModifiedBy\": {},\n        \"localizations\": [\n          {\n            \"buckets\": [\n              {}\n            ]\n          }\n        ]\n      },\n      \"taskConfiguration\": {\n        \"editPolicy\": {\n          \"rules\": [\n            {\n              \"propertyRule\": {\n                \"@odata.type\": \"#microsoft.graph.plannerTaskPropertyRule\",\n                \"appliedCategories\": {\n                  \"defaultRules\": [\n                    null\n                  ],\n                  \"overrides\": [\n                    {\n                      \"rules\": [\n                        null\n                      ]\n                    }\n                  ]\n                },\n                \"assignments\": {},\n                \"checkLists\": {},\n                \"delete\": [\n                  null\n                ],\n                \"dueDate\": [\n                  null\n                ],\n                \"move\": [\n                  null\n                ],\n                \"notes\": [\n                  null\n                ],\n                \"order\": [\n                  null\n                ],\n                \"percentComplete\": [\n                  null\n                ],\n                \"previewType\": [\n                  null\n                ],\n                \"priority\": [\n                  null\n                ],\n                \"references\": {},\n                \"startDate\": [\n                  null\n                ],\n                \"title\": [\n                  null\n                ]\n              },\n              \"role\": {}\n            }\n          ]\n        }\n      },\n      \"tasks\": [\n        {\n          \"appliedCategories\": {},\n          \"assignedToTaskBoardFormat\": {\n            \"orderHintsByAssignee\": {}\n          },\n          \"assignments\": {},\n          \"bucketTaskBoardFormat\": {},\n          \"completedBy\": {},\n          \"createdBy\": {},\n          \"creationSource\": {\n            \"teamsPublicationInfo\": {\n              \"@odata.type\": \"#microsoft.graph.plannerTeamsPublicationInfo\"\n            }\n          },\n          \"details\": {\n            \"checklist\": {},\n            \"notes\": {},\n            \"references\": {}\n          },\n          \"previewType\": {},\n          \"progressTaskBoardFormat\": {},\n          \"recurrence\": {\n            \"schedule\": {\n              \"pattern\": {\n                \"daysOfWeek\": [\n                  null\n                ],\n                \"firstDayOfWeek\": {}\n              }\n            }\n          },\n          \"businessScenarioProperties\": {},\n          \"target\": {}\n        }\n      ]\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "businessScenarios",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Solutions Solutions Root"
					],
					"operation": [
						"Solutions Solutions Root Update Solutions Root"
					]
				}
			}
		},
];
