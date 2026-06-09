import type { INodeProperties } from 'n8n-workflow';

export const officeConfigurationOfficeConfigurationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Configuration"
					]
				}
			},
			"options": [
				{
					"name": "Office Configuration Office Configuration Get Office Configuration",
					"value": "Office Configuration Office Configuration Get Office Configuration",
					"action": "Get officeConfiguration",
					"description": "Get officeConfiguration",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/officeConfiguration"
						}
					}
				},
				{
					"name": "Office Configuration Office Configuration Update Office Configuration",
					"value": "Office Configuration Office Configuration Update Office Configuration",
					"action": "Update officeConfiguration",
					"description": "Update officeConfiguration",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/officeConfiguration"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /officeConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Configuration"
					],
					"operation": [
						"Office Configuration Office Configuration Get Office Configuration"
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
						"Office Configuration Office Configuration"
					],
					"operation": [
						"Office Configuration Office Configuration Get Office Configuration"
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
						"Office Configuration Office Configuration"
					],
					"operation": [
						"Office Configuration Office Configuration Get Office Configuration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /officeConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Configuration"
					],
					"operation": [
						"Office Configuration Office Configuration Update Office Configuration"
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
						"Office Configuration Office Configuration"
					],
					"operation": [
						"Office Configuration Office Configuration Update Office Configuration"
					]
				}
			}
		},
		{
			"displayName": "Client Configurations",
			"name": "clientConfigurations",
			"type": "json",
			"default": "[\n  {\n    \"assignments\": [\n      {\n        \"target\": {}\n      }\n    ],\n    \"checkinStatuses\": [\n      {\n        \"appliedPolicies\": [\n          null\n        ]\n      }\n    ],\n    \"userCheckinSummary\": {}\n  }\n]",
			"description": "List of office Client configuration.",
			"routing": {
				"send": {
					"property": "clientConfigurations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Configuration"
					],
					"operation": [
						"Office Configuration Office Configuration Update Office Configuration"
					]
				}
			}
		},
		{
			"displayName": "Tenant Checkin Statuses",
			"name": "tenantCheckinStatuses",
			"type": "json",
			"default": "[\n  {\n    \"appliedPolicies\": [\n      null\n    ]\n  }\n]",
			"description": "List of office Client check-in status.",
			"routing": {
				"send": {
					"property": "tenantCheckinStatuses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Configuration"
					],
					"operation": [
						"Office Configuration Office Configuration Update Office Configuration"
					]
				}
			}
		},
		{
			"displayName": "Tenant User Checkin Summary",
			"name": "tenantUserCheckinSummary",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "tenantUserCheckinSummary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Office Configuration"
					],
					"operation": [
						"Office Configuration Office Configuration Update Office Configuration"
					]
				}
			}
		},
];
