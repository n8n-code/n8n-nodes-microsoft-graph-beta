import type { INodeProperties } from 'n8n-workflow';

export const devicesUsageRightDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Usage Right"
					]
				}
			},
			"options": [
				{
					"name": "Devices List Usage Rights",
					"value": "Devices List Usage Rights",
					"action": "List device usageRights",
					"description": "Retrieve a list of usageRight objects for a given device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/usageRights"
						}
					}
				},
				{
					"name": "Devices Create Usage Rights",
					"value": "Devices Create Usage Rights",
					"action": "Create new navigation property to usageRights for devices",
					"description": "Create new navigation property to usageRights for devices",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/usageRights"
						}
					}
				},
				{
					"name": "Devices Delete Usage Rights",
					"value": "Devices Delete Usage Rights",
					"action": "Delete navigation property usageRights for devices",
					"description": "Delete navigation property usageRights for devices",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/usageRights/{{$parameter[\"usageRight-id\"]}}"
						}
					}
				},
				{
					"name": "Devices Get Usage Rights",
					"value": "Devices Get Usage Rights",
					"action": "Get usageRights from devices",
					"description": "Represents the usage rights a device has been granted.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/usageRights/{{$parameter[\"usageRight-id\"]}}"
						}
					}
				},
				{
					"name": "Devices Update Usage Rights",
					"value": "Devices Update Usage Rights",
					"action": "Update the navigation property usageRights in devices",
					"description": "Update the navigation property usageRights in devices",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/usageRights/{{$parameter[\"usageRight-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /devices/{device-id}/usageRights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Usage Right"
					],
					"operation": [
						"Devices List Usage Rights"
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
						"Devices Usage Right"
					],
					"operation": [
						"Devices List Usage Rights"
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
						"Devices Usage Right"
					],
					"operation": [
						"Devices List Usage Rights"
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
						"Devices Usage Right"
					],
					"operation": [
						"Devices List Usage Rights"
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
						"Devices Usage Right"
					],
					"operation": [
						"Devices List Usage Rights"
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
						"Devices Usage Right"
					],
					"operation": [
						"Devices List Usage Rights"
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
						"Devices Usage Right"
					],
					"operation": [
						"Devices List Usage Rights"
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
						"Devices Usage Right"
					],
					"operation": [
						"Devices List Usage Rights"
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
						"Devices Usage Right"
					],
					"operation": [
						"Devices List Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "POST /devices/{device-id}/usageRights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Usage Right"
					],
					"operation": [
						"Devices Create Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "POST /devices/{device-id}/usageRights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Usage Right"
					],
					"operation": [
						"Devices Create Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /devices/{device-id}/usageRights/{usageRight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Usage Right"
					],
					"operation": [
						"Devices Delete Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Usage Right"
					],
					"operation": [
						"Devices Delete Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/usageRights/{usageRight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Usage Right"
					],
					"operation": [
						"Devices Get Usage Rights"
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
						"Devices Usage Right"
					],
					"operation": [
						"Devices Get Usage Rights"
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
						"Devices Usage Right"
					],
					"operation": [
						"Devices Get Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /devices/{device-id}/usageRights/{usageRight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Usage Right"
					],
					"operation": [
						"Devices Update Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /devices/{device-id}/usageRights/{usageRight-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Usage Right"
					],
					"operation": [
						"Devices Update Usage Rights"
					]
				}
			}
		},
];
