import type { INodeProperties } from 'n8n-workflow';

export const trustFrameworkTrustFrameworkDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework"
					]
				}
			},
			"options": [
				{
					"name": "Trust Framework Trust Framework Get Trust Framework",
					"value": "Trust Framework Trust Framework Get Trust Framework",
					"action": "Get trustFramework",
					"description": "Get trustFramework",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/trustFramework"
						}
					}
				},
				{
					"name": "Trust Framework Trust Framework Update Trust Framework",
					"value": "Trust Framework Trust Framework Update Trust Framework",
					"action": "Update trustFramework",
					"description": "Update trustFramework",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/trustFramework"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /trustFramework",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework"
					],
					"operation": [
						"Trust Framework Trust Framework Get Trust Framework"
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
						"Trust Framework Trust Framework"
					],
					"operation": [
						"Trust Framework Trust Framework Get Trust Framework"
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
						"Trust Framework Trust Framework"
					],
					"operation": [
						"Trust Framework Trust Framework Get Trust Framework"
					]
				}
			}
		},
		{
			"displayName": "PATCH /trustFramework",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework"
					],
					"operation": [
						"Trust Framework Trust Framework Update Trust Framework"
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
						"Trust Framework Trust Framework"
					],
					"operation": [
						"Trust Framework Trust Framework Update Trust Framework"
					]
				}
			}
		},
		{
			"displayName": "Key Sets",
			"name": "keySets",
			"type": "json",
			"default": "[\n  {\n    \"keys\": [\n      {\n        \"x5c\": [\n          null\n        ]\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "keySets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework"
					],
					"operation": [
						"Trust Framework Trust Framework Update Trust Framework"
					]
				}
			}
		},
		{
			"displayName": "Policies",
			"name": "policies",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "policies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework"
					],
					"operation": [
						"Trust Framework Trust Framework Update Trust Framework"
					]
				}
			}
		},
];
