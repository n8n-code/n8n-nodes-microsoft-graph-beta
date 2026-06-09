import type { INodeProperties } from 'n8n-workflow';

export const searchActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Search Actions"
					]
				}
			},
			"options": [
				{
					"name": "Search Query",
					"value": "Search Query",
					"action": "Invoke action query",
					"description": "Run a specified search query. Search results are provided in the response.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/search/microsoft.graph.query"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /search/microsoft.graph.query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Actions"
					],
					"operation": [
						"Search Query"
					]
				}
			}
		},
		{
			"displayName": "Requests",
			"name": "requests",
			"type": "json",
			"default": "[\n  {\n    \"aggregationFilters\": [\n      null\n    ],\n    \"aggregations\": [\n      {\n        \"bucketDefinition\": {\n          \"ranges\": [\n            {}\n          ]\n        }\n      }\n    ],\n    \"collapseProperties\": [\n      {\n        \"fields\": [\n          null\n        ]\n      }\n    ],\n    \"contentSources\": [\n      null\n    ],\n    \"entityTypes\": [\n      null\n    ],\n    \"fields\": [\n      null\n    ],\n    \"query\": {},\n    \"queryAlterationOptions\": {},\n    \"resultTemplateOptions\": {},\n    \"sharePointOneDriveOptions\": {},\n    \"sortProperties\": [\n      {}\n    ],\n    \"stored_fields\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "requests",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search Actions"
					],
					"operation": [
						"Search Query"
					]
				}
			}
		},
];
