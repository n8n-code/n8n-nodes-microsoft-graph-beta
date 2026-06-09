import type { INodeProperties } from 'n8n-workflow';

export const appCatalogsAppCatalogsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs App Catalogs"
					]
				}
			},
			"options": [
				{
					"name": "App Catalogs App Catalogs Get App Catalogs",
					"value": "App Catalogs App Catalogs Get App Catalogs",
					"action": "Get appCatalogs",
					"description": "Get appCatalogs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appCatalogs"
						}
					}
				},
				{
					"name": "App Catalogs App Catalogs Update App Catalogs",
					"value": "App Catalogs App Catalogs Update App Catalogs",
					"action": "Update appCatalogs",
					"description": "Update appCatalogs",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/appCatalogs"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /appCatalogs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs App Catalogs"
					],
					"operation": [
						"App Catalogs App Catalogs Get App Catalogs"
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
						"App Catalogs App Catalogs"
					],
					"operation": [
						"App Catalogs App Catalogs Get App Catalogs"
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
						"App Catalogs App Catalogs"
					],
					"operation": [
						"App Catalogs App Catalogs Get App Catalogs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appCatalogs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs App Catalogs"
					],
					"operation": [
						"App Catalogs App Catalogs Update App Catalogs"
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
						"App Catalogs App Catalogs"
					],
					"operation": [
						"App Catalogs App Catalogs Update App Catalogs"
					]
				}
			}
		},
		{
			"displayName": "Teams Apps",
			"name": "teamsApps",
			"type": "json",
			"default": "[\n  {\n    \"appDefinitions\": [\n      {\n        \"bot\": {},\n        \"colorIcon\": {\n          \"hostedContent\": {}\n        },\n        \"createdBy\": {\n          \"application\": {},\n          \"device\": {},\n          \"user\": {}\n        },\n        \"outlineIcon\": {}\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "teamsApps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs App Catalogs"
					],
					"operation": [
						"App Catalogs App Catalogs Update App Catalogs"
					]
				}
			}
		},
];
