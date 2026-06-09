import type { INodeProperties } from 'n8n-workflow';

export const applicationsApplicationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Application"
					]
				}
			},
			"options": [
				{
					"name": "Applications Application List Application",
					"value": "Applications Application List Application",
					"action": "List applications",
					"description": "Get the list of applications in this organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications"
						}
					}
				},
				{
					"name": "Applications Application Create Application",
					"value": "Applications Application Create Application",
					"action": "Create application",
					"description": "Create a new application object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications"
						}
					}
				},
				{
					"name": "Applications Application Delete Application",
					"value": "Applications Application Delete Application",
					"action": "Delete application",
					"description": "Deletes an application. When deleted, apps are moved to a temporary container and can be restored within 30 days. After that time, they are permanently deleted.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/applications/{{$parameter[\"application-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Application Get Application",
					"value": "Applications Application Get Application",
					"action": "Get application",
					"description": "Get the properties and relationships of an application object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Application Update Application",
					"value": "Applications Application Update Application",
					"action": "Update application",
					"description": "Update the properties of an application object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/applications/{{$parameter[\"application-id\"]}}"
						}
					}
				},
				{
					"name": "Applications Application Get Logo",
					"value": "Applications Application Get Logo",
					"action": "Get logo for application from applications",
					"description": "The main logo for the application. Not nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/logo"
						}
					}
				},
				{
					"name": "Applications Application Update Logo",
					"value": "Applications Application Update Logo",
					"action": "Update logo for application in applications",
					"description": "The main logo for the application. Not nullable.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/logo"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /applications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Application"
					],
					"operation": [
						"Applications Application List Application"
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
						"Applications Application"
					],
					"operation": [
						"Applications Application List Application"
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
						"Applications Application"
					],
					"operation": [
						"Applications Application List Application"
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
						"Applications Application"
					],
					"operation": [
						"Applications Application List Application"
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
						"Applications Application"
					],
					"operation": [
						"Applications Application List Application"
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
						"Applications Application"
					],
					"operation": [
						"Applications Application List Application"
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
						"Applications Application"
					],
					"operation": [
						"Applications Application List Application"
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
						"Applications Application"
					],
					"operation": [
						"Applications Application List Application"
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
						"Applications Application"
					],
					"operation": [
						"Applications Application List Application"
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
						"Applications Application"
					],
					"operation": [
						"Applications Application List Application"
					]
				}
			}
		},
		{
			"displayName": "POST /applications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Application"
					],
					"operation": [
						"Applications Application Create Application"
					]
				}
			}
		},
		{
			"displayName": "POST /applications<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Application"
					],
					"operation": [
						"Applications Application Create Application"
					]
				}
			}
		},
		{
			"displayName": "DELETE /applications/{application-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Application"
					],
					"operation": [
						"Applications Application Delete Application"
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
						"Applications Application"
					],
					"operation": [
						"Applications Application Delete Application"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Application"
					],
					"operation": [
						"Applications Application Get Application"
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
						"Applications Application"
					],
					"operation": [
						"Applications Application Get Application"
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
						"Applications Application"
					],
					"operation": [
						"Applications Application Get Application"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Application"
					],
					"operation": [
						"Applications Application Update Application"
					]
				}
			}
		},
		{
			"displayName": "PATCH /applications/{application-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Application"
					],
					"operation": [
						"Applications Application Update Application"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/logo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Application"
					],
					"operation": [
						"Applications Application Get Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /applications/{application-id}/logo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Application"
					],
					"operation": [
						"Applications Application Update Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /applications/{application-id}/logo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Application"
					],
					"operation": [
						"Applications Application Update Logo"
					]
				}
			}
		},
];
