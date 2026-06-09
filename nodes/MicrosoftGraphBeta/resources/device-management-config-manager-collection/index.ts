import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementConfigManagerCollectionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Config Manager Collection"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Config Manager Collections",
					"value": "Device Management List Config Manager Collections",
					"action": "Get configManagerCollections from deviceManagement",
					"description": "A list of ConfigManagerCollection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/configManagerCollections"
						}
					}
				},
				{
					"name": "Device Management Create Config Manager Collections",
					"value": "Device Management Create Config Manager Collections",
					"action": "Create new navigation property to configManagerCollections for deviceManagement",
					"description": "Create new navigation property to configManagerCollections for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/configManagerCollections"
						}
					}
				},
				{
					"name": "Device Management Delete Config Manager Collections",
					"value": "Device Management Delete Config Manager Collections",
					"action": "Delete navigation property configManagerCollections for deviceManagement",
					"description": "Delete navigation property configManagerCollections for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/configManagerCollections/{{$parameter[\"configManagerCollection-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Config Manager Collections",
					"value": "Device Management Get Config Manager Collections",
					"action": "Get configManagerCollections from deviceManagement",
					"description": "A list of ConfigManagerCollection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/configManagerCollections/{{$parameter[\"configManagerCollection-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Config Manager Collections",
					"value": "Device Management Update Config Manager Collections",
					"action": "Update the navigation property configManagerCollections in deviceManagement",
					"description": "Update the navigation property configManagerCollections in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/configManagerCollections/{{$parameter[\"configManagerCollection-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/configManagerCollections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management List Config Manager Collections"
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
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management List Config Manager Collections"
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
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management List Config Manager Collections"
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
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management List Config Manager Collections"
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
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management List Config Manager Collections"
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
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management List Config Manager Collections"
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
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management List Config Manager Collections"
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
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management List Config Manager Collections"
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
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management List Config Manager Collections"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/configManagerCollections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management Create Config Manager Collections"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/configManagerCollections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management Create Config Manager Collections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/configManagerCollections/{configManagerCollection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management Delete Config Manager Collections"
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
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management Delete Config Manager Collections"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/configManagerCollections/{configManagerCollection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management Get Config Manager Collections"
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
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management Get Config Manager Collections"
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
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management Get Config Manager Collections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/configManagerCollections/{configManagerCollection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management Update Config Manager Collections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/configManagerCollections/{configManagerCollection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Config Manager Collection"
					],
					"operation": [
						"Device Management Update Config Manager Collections"
					]
				}
			}
		},
];
