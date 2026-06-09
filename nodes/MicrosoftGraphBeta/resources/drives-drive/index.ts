import type { INodeProperties } from 'n8n-workflow';

export const drivesDriveDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive"
					]
				}
			},
			"options": [
				{
					"name": "Drives Drive List Drive",
					"value": "Drives Drive List Drive",
					"action": "Get Drive",
					"description": "Retrieve the properties and relationships of a Drive resource. A Drive is the top-level container for a file system, such as OneDrive or SharePoint document libraries.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives"
						}
					}
				},
				{
					"name": "Drives Drive Create Drive",
					"value": "Drives Drive Create Drive",
					"action": "Add new entity to drives",
					"description": "Add new entity to drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives"
						}
					}
				},
				{
					"name": "Drives Drive Delete Drive",
					"value": "Drives Drive Delete Drive",
					"action": "Delete entity from drives",
					"description": "Delete entity from drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Drive Get Drive",
					"value": "Drives Drive Get Drive",
					"action": "Get Drive",
					"description": "Retrieve the properties and relationships of a Drive resource. A Drive is the top-level container for a file system, such as OneDrive or SharePoint document libraries.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Drive Update Drive",
					"value": "Drives Drive Update Drive",
					"action": "Update entity in drives",
					"description": "Update entity in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /drives",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive"
					],
					"operation": [
						"Drives Drive List Drive"
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
						"Drives Drive"
					],
					"operation": [
						"Drives Drive List Drive"
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
						"Drives Drive"
					],
					"operation": [
						"Drives Drive List Drive"
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
						"Drives Drive"
					],
					"operation": [
						"Drives Drive List Drive"
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
						"Drives Drive"
					],
					"operation": [
						"Drives Drive List Drive"
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
						"Drives Drive"
					],
					"operation": [
						"Drives Drive List Drive"
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
						"Drives Drive"
					],
					"operation": [
						"Drives Drive List Drive"
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
						"Drives Drive"
					],
					"operation": [
						"Drives Drive List Drive"
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
						"Drives Drive"
					],
					"operation": [
						"Drives Drive List Drive"
					]
				}
			}
		},
		{
			"displayName": "POST /drives",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive"
					],
					"operation": [
						"Drives Drive Create Drive"
					]
				}
			}
		},
		{
			"displayName": "POST /drives<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive"
					],
					"operation": [
						"Drives Drive Create Drive"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive"
					],
					"operation": [
						"Drives Drive Delete Drive"
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
						"Drives Drive"
					],
					"operation": [
						"Drives Drive Delete Drive"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive"
					],
					"operation": [
						"Drives Drive Get Drive"
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
						"Drives Drive"
					],
					"operation": [
						"Drives Drive Get Drive"
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
						"Drives Drive"
					],
					"operation": [
						"Drives Drive Get Drive"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive"
					],
					"operation": [
						"Drives Drive Update Drive"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive"
					],
					"operation": [
						"Drives Drive Update Drive"
					]
				}
			}
		},
];
