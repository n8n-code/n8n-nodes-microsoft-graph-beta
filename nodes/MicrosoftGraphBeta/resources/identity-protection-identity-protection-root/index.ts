import type { INodeProperties } from 'n8n-workflow';

export const identityProtectionIdentityProtectionRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Identity Protection Root"
					]
				}
			},
			"options": [
				{
					"name": "Identity Protection Identity Protection Root Get Identity Protection Root",
					"value": "Identity Protection Identity Protection Root Get Identity Protection Root",
					"action": "Get identityProtection",
					"description": "Get identityProtection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityProtection"
						}
					}
				},
				{
					"name": "Identity Protection Identity Protection Root Update Identity Protection Root",
					"value": "Identity Protection Identity Protection Root Update Identity Protection Root",
					"action": "Update identityProtection",
					"description": "Update identityProtection",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityProtection"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identityProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Identity Protection Root"
					],
					"operation": [
						"Identity Protection Identity Protection Root Get Identity Protection Root"
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
						"Identity Protection Identity Protection Root"
					],
					"operation": [
						"Identity Protection Identity Protection Root Get Identity Protection Root"
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
						"Identity Protection Identity Protection Root"
					],
					"operation": [
						"Identity Protection Identity Protection Root Get Identity Protection Root"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Identity Protection Root"
					],
					"operation": [
						"Identity Protection Identity Protection Root Update Identity Protection Root"
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
						"Identity Protection Identity Protection Root"
					],
					"operation": [
						"Identity Protection Identity Protection Root Update Identity Protection Root"
					]
				}
			}
		},
		{
			"displayName": "Risk Detections",
			"name": "riskDetections",
			"type": "json",
			"default": "[\n  {\n    \"location\": {\n      \"geoCoordinates\": {}\n    }\n  }\n]",
			"description": "Risk detection in Azure AD Identity Protection and the associated information about the detection.",
			"routing": {
				"send": {
					"property": "riskDetections",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Identity Protection Root"
					],
					"operation": [
						"Identity Protection Identity Protection Root Update Identity Protection Root"
					]
				}
			}
		},
		{
			"displayName": "Risky Service Principals",
			"name": "riskyServicePrincipals",
			"type": "json",
			"default": "[\n  {\n    \"history\": [\n      {\n        \"activity\": {\n          \"riskEventTypes\": [\n            null\n          ]\n        }\n      }\n    ],\n    \"riskDetail\": {}\n  }\n]",
			"description": "Azure AD service principals that are at risk.",
			"routing": {
				"send": {
					"property": "riskyServicePrincipals",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Identity Protection Root"
					],
					"operation": [
						"Identity Protection Identity Protection Root Update Identity Protection Root"
					]
				}
			}
		},
		{
			"displayName": "Risky Users",
			"name": "riskyUsers",
			"type": "json",
			"default": "[\n  {\n    \"history\": [\n      {\n        \"activity\": {\n          \"eventTypes\": [\n            null\n          ],\n          \"riskEventTypes\": [\n            null\n          ]\n        }\n      }\n    ],\n    \"riskDetail\": {}\n  }\n]",
			"description": "Users that are flagged as at-risk by Azure AD Identity Protection.",
			"routing": {
				"send": {
					"property": "riskyUsers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Identity Protection Root"
					],
					"operation": [
						"Identity Protection Identity Protection Root Update Identity Protection Root"
					]
				}
			}
		},
		{
			"displayName": "Service Principal Risk Detections",
			"name": "servicePrincipalRiskDetections",
			"type": "json",
			"default": "[\n  {\n    \"keyIds\": [\n      null\n    ],\n    \"location\": {\n      \"geoCoordinates\": {}\n    }\n  }\n]",
			"description": "Represents information about detected at-risk service principals in an Azure AD tenant.",
			"routing": {
				"send": {
					"property": "servicePrincipalRiskDetections",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Identity Protection Root"
					],
					"operation": [
						"Identity Protection Identity Protection Root Update Identity Protection Root"
					]
				}
			}
		},
];
