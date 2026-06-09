import type { INodeProperties } from 'n8n-workflow';

export const externalExternalDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"External External"
					]
				}
			},
			"options": [
				{
					"name": "External External Get External",
					"value": "External External Get External",
					"action": "Get external",
					"description": "Get external",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/external"
						}
					}
				},
				{
					"name": "External External Update External",
					"value": "External External Update External",
					"action": "Update external",
					"description": "Update external",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/external"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /external",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External"
					],
					"operation": [
						"External External Get External"
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
						"External External"
					],
					"operation": [
						"External External Get External"
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
						"External External"
					],
					"operation": [
						"External External Get External"
					]
				}
			}
		},
		{
			"displayName": "PATCH /external",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External External"
					],
					"operation": [
						"External External Update External"
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
						"External External"
					],
					"operation": [
						"External External Update External"
					]
				}
			}
		},
		{
			"displayName": "Connections",
			"name": "connections",
			"type": "json",
			"default": "[\n  {\n    \"activitySettings\": {\n      \"urlToItemResolvers\": [\n        {}\n      ]\n    },\n    \"complianceSettings\": {\n      \"eDiscoveryResultTemplates\": [\n        {\n          \"layout\": {},\n          \"rules\": [\n            {\n              \"values\": [\n                null\n              ]\n            }\n          ]\n        }\n      ]\n    },\n    \"configuration\": {\n      \"authorizedAppIds\": [\n        null\n      ]\n    },\n    \"groups\": [\n      {\n        \"members\": [\n          {}\n        ]\n      }\n    ],\n    \"items\": [\n      {\n        \"acl\": [\n          {}\n        ],\n        \"activities\": [\n          {\n            \"performedBy\": {}\n          }\n        ],\n        \"content\": {},\n        \"properties\": {}\n      }\n    ],\n    \"operations\": [\n      {\n        \"error\": {\n          \"details\": [\n            {}\n          ],\n          \"innerError\": {\n            \"details\": [\n              {}\n            ]\n          }\n        }\n      }\n    ],\n    \"quota\": {},\n    \"schema\": {\n      \"properties\": [\n        {\n          \"aliases\": [\n            null\n          ],\n          \"labels\": [\n            null\n          ]\n        }\n      ]\n    },\n    \"searchSettings\": {\n      \"searchResultTemplates\": [\n        {}\n      ]\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "connections",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"External External"
					],
					"operation": [
						"External External Update External"
					]
				}
			}
		},
];
