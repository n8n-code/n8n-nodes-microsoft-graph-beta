import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementManagedAppStatusDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Status"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Managed App Statuses",
					"value": "Device App Management List Managed App Statuses",
					"action": "Get managedAppStatuses from deviceAppManagement",
					"description": "The managed app statuses.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedAppStatuses"
						}
					}
				},
				{
					"name": "Device App Management Create Managed App Statuses",
					"value": "Device App Management Create Managed App Statuses",
					"action": "Create new navigation property to managedAppStatuses for deviceAppManagement",
					"description": "Create new navigation property to managedAppStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedAppStatuses"
						}
					}
				},
				{
					"name": "Device App Management Delete Managed App Statuses",
					"value": "Device App Management Delete Managed App Statuses",
					"action": "Delete navigation property managedAppStatuses for deviceAppManagement",
					"description": "Delete navigation property managedAppStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/managedAppStatuses/{{$parameter[\"managedAppStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Managed App Statuses",
					"value": "Device App Management Get Managed App Statuses",
					"action": "Get managedAppStatuses from deviceAppManagement",
					"description": "The managed app statuses.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedAppStatuses/{{$parameter[\"managedAppStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Managed App Statuses",
					"value": "Device App Management Update Managed App Statuses",
					"action": "Update the navigation property managedAppStatuses in deviceAppManagement",
					"description": "Update the navigation property managedAppStatuses in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/managedAppStatuses/{{$parameter[\"managedAppStatus-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/managedAppStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management List Managed App Statuses"
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
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management List Managed App Statuses"
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
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management List Managed App Statuses"
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
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management List Managed App Statuses"
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
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management List Managed App Statuses"
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
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management List Managed App Statuses"
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
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management List Managed App Statuses"
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
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management List Managed App Statuses"
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
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management List Managed App Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedAppStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management Create Managed App Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedAppStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management Create Managed App Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management Delete Managed App Statuses"
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
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management Delete Managed App Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management Get Managed App Statuses"
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
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management Get Managed App Statuses"
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
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management Get Managed App Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management Update Managed App Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed App Status"
					],
					"operation": [
						"Device App Management Update Managed App Statuses"
					]
				}
			}
		},
];
