import type { INodeProperties } from 'n8n-workflow';

export const drivesItemActivityOldDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Item Activity OLD"
					]
				}
			},
			"options": [
				{
					"name": "Drives List Activities",
					"value": "Drives List Activities",
					"action": "List activities (preview)",
					"description": "List the recent activities that took place on an item or under a hierarchy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Drives Create Activities",
					"value": "Drives Create Activities",
					"action": "Create new navigation property to activities for drives",
					"description": "Create new navigation property to activities for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Drives Delete Activities",
					"value": "Drives Delete Activities",
					"action": "Delete navigation property activities for drives",
					"description": "Delete navigation property activities for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Get Activities",
					"value": "Drives Get Activities",
					"action": "Get activities from drives",
					"description": "The list of recent activities that took place under this drive.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Update Activities",
					"value": "Drives Update Activities",
					"action": "Update the navigation property activities in drives",
					"description": "Update the navigation property activities in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Activities Get Drive Item",
					"value": "Drives Activities Get Drive Item",
					"action": "Get driveItem from drives",
					"description": "Get driveItem from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/driveItem"
						}
					}
				},
				{
					"name": "Drives Activities Get Drive Item Content",
					"value": "Drives Activities Get Drive Item Content",
					"action": "Get content for the navigation property driveItem from drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Drives Activities Update Drive Item Content",
					"value": "Drives Activities Update Drive Item Content",
					"action": "Update content for the navigation property driveItem in drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Drives Activities Get List Item",
					"value": "Drives Activities Get List Item",
					"action": "Get listItem from drives",
					"description": "Get listItem from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/listItem"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /drives/{drive-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives List Activities"
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
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives List Activities"
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
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives List Activities"
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
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives List Activities"
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
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives List Activities"
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
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives List Activities"
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
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives List Activities"
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
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives List Activities"
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
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives List Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Create Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/activities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Create Activities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/activities/{itemActivityOLD-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Delete Activities"
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
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Delete Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/activities/{itemActivityOLD-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Get Activities"
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
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Get Activities"
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
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Get Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/activities/{itemActivityOLD-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Update Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/activities/{itemActivityOLD-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Update Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/activities/{itemActivityOLD-id}/driveItem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Activities Get Drive Item"
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
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Activities Get Drive Item"
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
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Activities Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/activities/{itemActivityOLD-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Activities Get Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/activities/{itemActivityOLD-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Activities Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/activities/{itemActivityOLD-id}/driveItem/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Activities Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/activities/{itemActivityOLD-id}/listItem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Activities Get List Item"
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
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Activities Get List Item"
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
						"Drives Item Activity OLD"
					],
					"operation": [
						"Drives Activities Get List Item"
					]
				}
			}
		},
];
