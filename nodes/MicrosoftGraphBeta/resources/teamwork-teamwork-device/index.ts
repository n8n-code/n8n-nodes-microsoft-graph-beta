import type { INodeProperties } from 'n8n-workflow';

export const teamworkTeamworkDeviceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					]
				}
			},
			"options": [
				{
					"name": "Teamwork List Devices",
					"value": "Teamwork List Devices",
					"action": "List teamworkDevices",
					"description": "Get a list of all Microsoft Teams-enabled devices provisioned for a tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/devices"
						}
					}
				},
				{
					"name": "Teamwork Create Devices",
					"value": "Teamwork Create Devices",
					"action": "Create new navigation property to devices for teamwork",
					"description": "Create new navigation property to devices for teamwork",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamwork/devices"
						}
					}
				},
				{
					"name": "Teamwork Delete Devices",
					"value": "Teamwork Delete Devices",
					"action": "Delete navigation property devices for teamwork",
					"description": "Delete navigation property devices for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Get Devices",
					"value": "Teamwork Get Devices",
					"action": "Get devices from teamwork",
					"description": "The Teams devices provisioned for the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Update Devices",
					"value": "Teamwork Update Devices",
					"action": "Update the navigation property devices in teamwork",
					"description": "Update the navigation property devices in teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Devices Delete Activity",
					"value": "Teamwork Devices Delete Activity",
					"action": "Delete navigation property activity for teamwork",
					"description": "Delete navigation property activity for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}/activity"
						}
					}
				},
				{
					"name": "Teamwork Devices Get Activity",
					"value": "Teamwork Devices Get Activity",
					"action": "Get teamworkDeviceActivity",
					"description": "Get the activity status of a Microsoft Teams-enabled device. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}/activity"
						}
					}
				},
				{
					"name": "Teamwork Devices Update Activity",
					"value": "Teamwork Devices Update Activity",
					"action": "Update the navigation property activity in teamwork",
					"description": "Update the navigation property activity in teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}/activity"
						}
					}
				},
				{
					"name": "Teamwork Devices Delete Configuration",
					"value": "Teamwork Devices Delete Configuration",
					"action": "Delete navigation property configuration for teamwork",
					"description": "Delete navigation property configuration for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}/configuration"
						}
					}
				},
				{
					"name": "Teamwork Devices Get Configuration",
					"value": "Teamwork Devices Get Configuration",
					"action": "Get teamworkDeviceConfiguration",
					"description": "Get the configuration details of a Microsoft Teams-enabled device, including software versions, peripheral device configuration (for example, camera, display, microphone, and speaker), hardware configuration, and Microsoft Teams client configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}/configuration"
						}
					}
				},
				{
					"name": "Teamwork Devices Update Configuration",
					"value": "Teamwork Devices Update Configuration",
					"action": "Update the navigation property configuration in teamwork",
					"description": "Update the navigation property configuration in teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}/configuration"
						}
					}
				},
				{
					"name": "Teamwork Devices Delete Health",
					"value": "Teamwork Devices Delete Health",
					"action": "Delete navigation property health for teamwork",
					"description": "Delete navigation property health for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}/health"
						}
					}
				},
				{
					"name": "Teamwork Devices Get Health",
					"value": "Teamwork Devices Get Health",
					"action": "Get teamworkDeviceHealth",
					"description": "Get the health details of a Microsoft Teams-enabled device. Device health is calculated based on the device configuration and other device parameters.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}/health"
						}
					}
				},
				{
					"name": "Teamwork Devices Update Health",
					"value": "Teamwork Devices Update Health",
					"action": "Update the navigation property health in teamwork",
					"description": "Update the navigation property health in teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}/health"
						}
					}
				},
				{
					"name": "Teamwork Devices List Operations",
					"value": "Teamwork Devices List Operations",
					"action": "List teamworkDeviceOperations",
					"description": "Get a list of the operations that are running on a Microsoft Teams-enabled device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Teamwork Devices Create Operations",
					"value": "Teamwork Devices Create Operations",
					"action": "Create new navigation property to operations for teamwork",
					"description": "Create new navigation property to operations for teamwork",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Teamwork Devices Delete Operations",
					"value": "Teamwork Devices Delete Operations",
					"action": "Delete navigation property operations for teamwork",
					"description": "Delete navigation property operations for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}/operations/{{$parameter[\"teamworkDeviceOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Devices Get Operations",
					"value": "Teamwork Devices Get Operations",
					"action": "Get operations from teamwork",
					"description": "The async operations on the device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}/operations/{{$parameter[\"teamworkDeviceOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Devices Update Operations",
					"value": "Teamwork Devices Update Operations",
					"action": "Update the navigation property operations in teamwork",
					"description": "Update the navigation property operations in teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/devices/{{$parameter[\"teamworkDevice-id\"]}}/operations/{{$parameter[\"teamworkDeviceOperation-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /teamwork/devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork List Devices"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork List Devices"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork List Devices"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork List Devices"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork List Devices"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork List Devices"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork List Devices"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork List Devices"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork List Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Create Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/devices<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Create Devices"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamwork/devices/{teamworkDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Delete Devices"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Delete Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/devices/{teamworkDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Get Devices"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Get Devices"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Get Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/devices/{teamworkDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Update Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/devices/{teamworkDevice-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Update Devices"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamwork/devices/{teamworkDevice-id}/activity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Delete Activity"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Delete Activity"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/devices/{teamworkDevice-id}/activity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Get Activity"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Get Activity"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Get Activity"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/devices/{teamworkDevice-id}/activity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Update Activity"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/devices/{teamworkDevice-id}/activity<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Update Activity"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamwork/devices/{teamworkDevice-id}/configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Delete Configuration"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Delete Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/devices/{teamworkDevice-id}/configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Get Configuration"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Get Configuration"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Get Configuration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/devices/{teamworkDevice-id}/configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Update Configuration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/devices/{teamworkDevice-id}/configuration<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Update Configuration"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamwork/devices/{teamworkDevice-id}/health",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Delete Health"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Delete Health"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/devices/{teamworkDevice-id}/health",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Get Health"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Get Health"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Get Health"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/devices/{teamworkDevice-id}/health",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Update Health"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/devices/{teamworkDevice-id}/health<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Update Health"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/devices/{teamworkDevice-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices List Operations"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices List Operations"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices List Operations"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices List Operations"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices List Operations"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices List Operations"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices List Operations"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices List Operations"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/devices/{teamworkDevice-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/devices/{teamworkDevice-id}/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Delete Operations"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Get Operations"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Get Operations"
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
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork Device"
					],
					"operation": [
						"Teamwork Devices Update Operations"
					]
				}
			}
		},
];
