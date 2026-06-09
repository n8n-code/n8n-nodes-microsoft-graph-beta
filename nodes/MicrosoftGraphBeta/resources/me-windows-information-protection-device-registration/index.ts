import type { INodeProperties } from 'n8n-workflow';

export const meWindowsInformationProtectionDeviceRegistrationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Windows Information Protection Device Registration"
					]
				}
			},
			"options": [
				{
					"name": "Me List Windows Information Protection Device Registrations",
					"value": "Me List Windows Information Protection Device Registrations",
					"action": "Get windowsInformationProtectionDeviceRegistrations from me",
					"description": "Zero or more WIP device registrations that belong to the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/windowsInformationProtectionDeviceRegistrations"
						}
					}
				},
				{
					"name": "Me Get Windows Information Protection Device Registrations",
					"value": "Me Get Windows Information Protection Device Registrations",
					"action": "Get windowsInformationProtectionDeviceRegistrations from me",
					"description": "Zero or more WIP device registrations that belong to the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/windowsInformationProtectionDeviceRegistrations/{{$parameter[\"windowsInformationProtectionDeviceRegistration-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/windowsInformationProtectionDeviceRegistrations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Windows Information Protection Device Registration"
					],
					"operation": [
						"Me List Windows Information Protection Device Registrations"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Windows Information Protection Device Registration"
					],
					"operation": [
						"Me List Windows Information Protection Device Registrations"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Windows Information Protection Device Registration"
					],
					"operation": [
						"Me List Windows Information Protection Device Registrations"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Windows Information Protection Device Registration"
					],
					"operation": [
						"Me List Windows Information Protection Device Registrations"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Windows Information Protection Device Registration"
					],
					"operation": [
						"Me List Windows Information Protection Device Registrations"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Windows Information Protection Device Registration"
					],
					"operation": [
						"Me List Windows Information Protection Device Registrations"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Windows Information Protection Device Registration"
					],
					"operation": [
						"Me List Windows Information Protection Device Registrations"
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
						"Me Windows Information Protection Device Registration"
					],
					"operation": [
						"Me List Windows Information Protection Device Registrations"
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
						"Me Windows Information Protection Device Registration"
					],
					"operation": [
						"Me List Windows Information Protection Device Registrations"
					]
				}
			}
		},
		{
			"displayName": "GET /me/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Windows Information Protection Device Registration"
					],
					"operation": [
						"Me Get Windows Information Protection Device Registrations"
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
						"Me Windows Information Protection Device Registration"
					],
					"operation": [
						"Me Get Windows Information Protection Device Registrations"
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
						"Me Windows Information Protection Device Registration"
					],
					"operation": [
						"Me Get Windows Information Protection Device Registrations"
					]
				}
			}
		},
];
