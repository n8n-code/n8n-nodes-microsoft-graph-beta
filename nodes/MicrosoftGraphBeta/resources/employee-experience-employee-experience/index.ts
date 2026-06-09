import type { INodeProperties } from 'n8n-workflow';

export const employeeExperienceEmployeeExperienceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Employee Experience"
					]
				}
			},
			"options": [
				{
					"name": "Employee Experience Employee Experience Get Employee Experience",
					"value": "Employee Experience Employee Experience Get Employee Experience",
					"action": "Get employeeExperience",
					"description": "Get employeeExperience",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/employeeExperience"
						}
					}
				},
				{
					"name": "Employee Experience Employee Experience Update Employee Experience",
					"value": "Employee Experience Employee Experience Update Employee Experience",
					"action": "Update employeeExperience",
					"description": "Update employeeExperience",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/employeeExperience"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /employeeExperience",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Employee Experience"
					],
					"operation": [
						"Employee Experience Employee Experience Get Employee Experience"
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
						"Employee Experience Employee Experience"
					],
					"operation": [
						"Employee Experience Employee Experience Get Employee Experience"
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
						"Employee Experience Employee Experience"
					],
					"operation": [
						"Employee Experience Employee Experience Get Employee Experience"
					]
				}
			}
		},
		{
			"displayName": "PATCH /employeeExperience",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Employee Experience"
					],
					"operation": [
						"Employee Experience Employee Experience Update Employee Experience"
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
						"Employee Experience Employee Experience"
					],
					"operation": [
						"Employee Experience Employee Experience Update Employee Experience"
					]
				}
			}
		},
		{
			"displayName": "Learning Providers",
			"name": "learningProviders",
			"type": "json",
			"default": "[\n  {\n    \"learningContents\": [\n      {\n        \"additionalTags\": [\n          null\n        ],\n        \"contributors\": [\n          null\n        ],\n        \"skillTags\": [\n          null\n        ]\n      }\n    ]\n  }\n]",
			"description": "A collection of learning providers.",
			"routing": {
				"send": {
					"property": "learningProviders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Experience Employee Experience"
					],
					"operation": [
						"Employee Experience Employee Experience Update Employee Experience"
					]
				}
			}
		},
];
