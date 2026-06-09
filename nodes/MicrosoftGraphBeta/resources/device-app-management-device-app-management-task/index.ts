import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementDeviceAppManagementTaskDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Device App Management Task"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Device App Management Tasks",
					"value": "Device App Management List Device App Management Tasks",
					"action": "Get deviceAppManagementTasks from deviceAppManagement",
					"description": "Device app management tasks.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/deviceAppManagementTasks"
						}
					}
				},
				{
					"name": "Device App Management Create Device App Management Tasks",
					"value": "Device App Management Create Device App Management Tasks",
					"action": "Create new navigation property to deviceAppManagementTasks for deviceAppManagement",
					"description": "Create new navigation property to deviceAppManagementTasks for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/deviceAppManagementTasks"
						}
					}
				},
				{
					"name": "Device App Management Delete Device App Management Tasks",
					"value": "Device App Management Delete Device App Management Tasks",
					"action": "Delete navigation property deviceAppManagementTasks for deviceAppManagement",
					"description": "Delete navigation property deviceAppManagementTasks for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/deviceAppManagementTasks/{{$parameter[\"deviceAppManagementTask-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Device App Management Tasks",
					"value": "Device App Management Get Device App Management Tasks",
					"action": "Get deviceAppManagementTasks from deviceAppManagement",
					"description": "Device app management tasks.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/deviceAppManagementTasks/{{$parameter[\"deviceAppManagementTask-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Device App Management Tasks",
					"value": "Device App Management Update Device App Management Tasks",
					"action": "Update the navigation property deviceAppManagementTasks in deviceAppManagement",
					"description": "Update the navigation property deviceAppManagementTasks in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/deviceAppManagementTasks/{{$parameter[\"deviceAppManagementTask-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/deviceAppManagementTasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management List Device App Management Tasks"
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
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management List Device App Management Tasks"
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
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management List Device App Management Tasks"
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
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management List Device App Management Tasks"
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
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management List Device App Management Tasks"
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
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management List Device App Management Tasks"
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
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management List Device App Management Tasks"
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
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management List Device App Management Tasks"
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
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management List Device App Management Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/deviceAppManagementTasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management Create Device App Management Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/deviceAppManagementTasks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management Create Device App Management Tasks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management Delete Device App Management Tasks"
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
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management Delete Device App Management Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management Get Device App Management Tasks"
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
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management Get Device App Management Tasks"
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
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management Get Device App Management Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management Update Device App Management Tasks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Device App Management Task"
					],
					"operation": [
						"Device App Management Update Device App Management Tasks"
					]
				}
			}
		},
];
