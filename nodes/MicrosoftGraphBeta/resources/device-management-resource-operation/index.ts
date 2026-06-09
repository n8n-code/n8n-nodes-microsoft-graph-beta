import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementResourceOperationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Resource Operation"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Resource Operations",
					"value": "Device Management List Resource Operations",
					"action": "Get resourceOperations from deviceManagement",
					"description": "The Resource Operations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/resourceOperations"
						}
					}
				},
				{
					"name": "Device Management Create Resource Operations",
					"value": "Device Management Create Resource Operations",
					"action": "Create new navigation property to resourceOperations for deviceManagement",
					"description": "Create new navigation property to resourceOperations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/resourceOperations"
						}
					}
				},
				{
					"name": "Device Management Delete Resource Operations",
					"value": "Device Management Delete Resource Operations",
					"action": "Delete navigation property resourceOperations for deviceManagement",
					"description": "Delete navigation property resourceOperations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/resourceOperations/{{$parameter[\"resourceOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Resource Operations",
					"value": "Device Management Get Resource Operations",
					"action": "Get resourceOperations from deviceManagement",
					"description": "The Resource Operations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/resourceOperations/{{$parameter[\"resourceOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Resource Operations",
					"value": "Device Management Update Resource Operations",
					"action": "Update the navigation property resourceOperations in deviceManagement",
					"description": "Update the navigation property resourceOperations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/resourceOperations/{{$parameter[\"resourceOperation-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/resourceOperations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management List Resource Operations"
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
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management List Resource Operations"
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
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management List Resource Operations"
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
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management List Resource Operations"
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
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management List Resource Operations"
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
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management List Resource Operations"
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
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management List Resource Operations"
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
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management List Resource Operations"
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
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management List Resource Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/resourceOperations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management Create Resource Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/resourceOperations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management Create Resource Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/resourceOperations/{resourceOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management Delete Resource Operations"
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
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management Delete Resource Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/resourceOperations/{resourceOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management Get Resource Operations"
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
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management Get Resource Operations"
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
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management Get Resource Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/resourceOperations/{resourceOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management Update Resource Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/resourceOperations/{resourceOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Resource Operation"
					],
					"operation": [
						"Device Management Update Resource Operations"
					]
				}
			}
		},
];
