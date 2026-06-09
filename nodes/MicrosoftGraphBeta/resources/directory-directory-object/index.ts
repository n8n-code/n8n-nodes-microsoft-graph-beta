import type { INodeProperties } from 'n8n-workflow';

export const directoryDirectoryObjectDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Directory Object"
					]
				}
			},
			"options": [
				{
					"name": "Directory List Deleted Items",
					"value": "Directory List Deleted Items",
					"action": "Get deletedItems from directory",
					"description": "Get deletedItems from directory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/deletedItems"
						}
					}
				},
				{
					"name": "Directory Create Deleted Items",
					"value": "Directory Create Deleted Items",
					"action": "Create new navigation property to deletedItems for directory",
					"description": "Create new navigation property to deletedItems for directory",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/deletedItems"
						}
					}
				},
				{
					"name": "Directory Delete Deleted Items",
					"value": "Directory Delete Deleted Items",
					"action": "Delete navigation property deletedItems for directory",
					"description": "Delete navigation property deletedItems for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/deletedItems/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Get Deleted Items",
					"value": "Directory Get Deleted Items",
					"action": "Get deletedItems from directory",
					"description": "Get deletedItems from directory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/deletedItems/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Update Deleted Items",
					"value": "Directory Update Deleted Items",
					"action": "Update the navigation property deletedItems in directory",
					"description": "Update the navigation property deletedItems in directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory/deletedItems/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directory/deletedItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Directory Object"
					],
					"operation": [
						"Directory List Deleted Items"
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
						"Directory Directory Object"
					],
					"operation": [
						"Directory List Deleted Items"
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
						"Directory Directory Object"
					],
					"operation": [
						"Directory List Deleted Items"
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
						"Directory Directory Object"
					],
					"operation": [
						"Directory List Deleted Items"
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
						"Directory Directory Object"
					],
					"operation": [
						"Directory List Deleted Items"
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
						"Directory Directory Object"
					],
					"operation": [
						"Directory List Deleted Items"
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
						"Directory Directory Object"
					],
					"operation": [
						"Directory List Deleted Items"
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
						"Directory Directory Object"
					],
					"operation": [
						"Directory List Deleted Items"
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
						"Directory Directory Object"
					],
					"operation": [
						"Directory List Deleted Items"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/deletedItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Directory Object"
					],
					"operation": [
						"Directory Create Deleted Items"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/deletedItems<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Directory Object"
					],
					"operation": [
						"Directory Create Deleted Items"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/deletedItems/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Directory Object"
					],
					"operation": [
						"Directory Delete Deleted Items"
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
						"Directory Directory Object"
					],
					"operation": [
						"Directory Delete Deleted Items"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/deletedItems/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Directory Object"
					],
					"operation": [
						"Directory Get Deleted Items"
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
						"Directory Directory Object"
					],
					"operation": [
						"Directory Get Deleted Items"
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
						"Directory Directory Object"
					],
					"operation": [
						"Directory Get Deleted Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/deletedItems/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Directory Object"
					],
					"operation": [
						"Directory Update Deleted Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/deletedItems/{directoryObject-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Directory Object"
					],
					"operation": [
						"Directory Update Deleted Items"
					]
				}
			}
		},
];
