import type { INodeProperties } from 'n8n-workflow';

export const directoryObjectsDirectoryObjectDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Objects Directory Object"
					]
				}
			},
			"options": [
				{
					"name": "Directory Objects Directory Object List Directory Object",
					"value": "Directory Objects Directory Object List Directory Object",
					"action": "Get entities from directoryObjects",
					"description": "Get entities from directoryObjects",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryObjects"
						}
					}
				},
				{
					"name": "Directory Objects Directory Object Create Directory Object",
					"value": "Directory Objects Directory Object Create Directory Object",
					"action": "Add new entity to directoryObjects",
					"description": "Add new entity to directoryObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directoryObjects"
						}
					}
				},
				{
					"name": "Directory Objects Directory Object Delete Directory Object",
					"value": "Directory Objects Directory Object Delete Directory Object",
					"action": "Delete directoryObject",
					"description": "Delete a directory object, for example, a group, user, application, or service principal.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directoryObjects/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Objects Directory Object Get Directory Object",
					"value": "Directory Objects Directory Object Get Directory Object",
					"action": "Get directoryObject",
					"description": "Retrieve the properties and relationships of a directoryObject object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryObjects/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Objects Directory Object Update Directory Object",
					"value": "Directory Objects Directory Object Update Directory Object",
					"action": "Update entity in directoryObjects",
					"description": "Update entity in directoryObjects",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directoryObjects/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directoryObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object List Directory Object"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object List Directory Object"
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
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object List Directory Object"
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
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object List Directory Object"
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
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object List Directory Object"
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
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object List Directory Object"
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
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object List Directory Object"
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
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object List Directory Object"
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
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object List Directory Object"
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
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object List Directory Object"
					]
				}
			}
		},
		{
			"displayName": "POST /directoryObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object Create Directory Object"
					]
				}
			}
		},
		{
			"displayName": "POST /directoryObjects<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object Create Directory Object"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directoryObjects/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object Delete Directory Object"
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
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object Delete Directory Object"
					]
				}
			}
		},
		{
			"displayName": "GET /directoryObjects/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object Get Directory Object"
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
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object Get Directory Object"
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
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object Get Directory Object"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directoryObjects/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object Update Directory Object"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directoryObjects/{directoryObject-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Objects Directory Object"
					],
					"operation": [
						"Directory Objects Directory Object Update Directory Object"
					]
				}
			}
		},
];
