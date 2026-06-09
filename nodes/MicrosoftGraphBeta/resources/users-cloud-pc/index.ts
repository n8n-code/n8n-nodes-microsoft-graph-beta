import type { INodeProperties } from 'n8n-workflow';

export const usersCloudPcDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Cloud PC"
					]
				}
			},
			"options": [
				{
					"name": "Users List Cloud P Cs",
					"value": "Users List Cloud P Cs",
					"action": "List cloudPCs",
					"description": "List the cloudPC devices that are attributed to the signed-in user. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/cloudPCs"
						}
					}
				},
				{
					"name": "Users Create Cloud P Cs",
					"value": "Users Create Cloud P Cs",
					"action": "Create new navigation property to cloudPCs for users",
					"description": "Create new navigation property to cloudPCs for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/cloudPCs"
						}
					}
				},
				{
					"name": "Users Delete Cloud P Cs",
					"value": "Users Delete Cloud P Cs",
					"action": "Delete navigation property cloudPCs for users",
					"description": "Delete navigation property cloudPCs for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/cloudPCs/{{$parameter[\"cloudPC-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Cloud P Cs",
					"value": "Users Get Cloud P Cs",
					"action": "Get cloudPCs from users",
					"description": "Get cloudPCs from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/cloudPCs/{{$parameter[\"cloudPC-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update Cloud P Cs",
					"value": "Users Update Cloud P Cs",
					"action": "Update the navigation property cloudPCs in users",
					"description": "Update the navigation property cloudPCs in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/cloudPCs/{{$parameter[\"cloudPC-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/cloudPCs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Cloud PC"
					],
					"operation": [
						"Users List Cloud P Cs"
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
						"Users Cloud PC"
					],
					"operation": [
						"Users List Cloud P Cs"
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
						"Users Cloud PC"
					],
					"operation": [
						"Users List Cloud P Cs"
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
						"Users Cloud PC"
					],
					"operation": [
						"Users List Cloud P Cs"
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
						"Users Cloud PC"
					],
					"operation": [
						"Users List Cloud P Cs"
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
						"Users Cloud PC"
					],
					"operation": [
						"Users List Cloud P Cs"
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
						"Users Cloud PC"
					],
					"operation": [
						"Users List Cloud P Cs"
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
						"Users Cloud PC"
					],
					"operation": [
						"Users List Cloud P Cs"
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
						"Users Cloud PC"
					],
					"operation": [
						"Users List Cloud P Cs"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/cloudPCs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Cloud PC"
					],
					"operation": [
						"Users Create Cloud P Cs"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/cloudPCs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Cloud PC"
					],
					"operation": [
						"Users Create Cloud P Cs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/cloudPCs/{cloudPC-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Cloud PC"
					],
					"operation": [
						"Users Delete Cloud P Cs"
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
						"Users Cloud PC"
					],
					"operation": [
						"Users Delete Cloud P Cs"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/cloudPCs/{cloudPC-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Cloud PC"
					],
					"operation": [
						"Users Get Cloud P Cs"
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
						"Users Cloud PC"
					],
					"operation": [
						"Users Get Cloud P Cs"
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
						"Users Cloud PC"
					],
					"operation": [
						"Users Get Cloud P Cs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/cloudPCs/{cloudPC-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Cloud PC"
					],
					"operation": [
						"Users Update Cloud P Cs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/cloudPCs/{cloudPC-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Cloud PC"
					],
					"operation": [
						"Users Update Cloud P Cs"
					]
				}
			}
		},
];
