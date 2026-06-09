import type { INodeProperties } from 'n8n-workflow';

export const meProfilePhotoDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile Photo"
					]
				}
			},
			"options": [
				{
					"name": "Me Get Photo",
					"value": "Me Get Photo",
					"action": "Get photo from me",
					"description": "The user's profile photo. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/photo"
						}
					}
				},
				{
					"name": "Me Update Photo",
					"value": "Me Update Photo",
					"action": "Update the navigation property photo in me",
					"description": "Update the navigation property photo in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/photo"
						}
					}
				},
				{
					"name": "Me Get Photo Content",
					"value": "Me Get Photo Content",
					"action": "Get media content for the navigation property photo from me",
					"description": "Get media content for the navigation property photo from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/photo/$value"
						}
					}
				},
				{
					"name": "Me Update Photo Content",
					"value": "Me Update Photo Content",
					"action": "Update media content for the navigation property photo in me",
					"description": "Update media content for the navigation property photo in me",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/photo/$value"
						}
					}
				},
				{
					"name": "Me List Photos",
					"value": "Me List Photos",
					"action": "Get photos from me",
					"description": "Get photos from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/photos"
						}
					}
				},
				{
					"name": "Me Get Photos",
					"value": "Me Get Photos",
					"action": "Get photos from me",
					"description": "Get photos from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/photos/{{$parameter[\"profilePhoto-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Photos Content",
					"value": "Me Get Photos Content",
					"action": "Get media content for the navigation property photos from me",
					"description": "Get media content for the navigation property photos from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/photos/{{$parameter[\"profilePhoto-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Me Update Photos Content",
					"value": "Me Update Photos Content",
					"action": "Update media content for the navigation property photos in me",
					"description": "Update media content for the navigation property photos in me",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/photos/{{$parameter[\"profilePhoto-id\"]}}/$value"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile Photo"
					],
					"operation": [
						"Me Get Photo"
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
						"Me Profile Photo"
					],
					"operation": [
						"Me Get Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile Photo"
					],
					"operation": [
						"Me Update Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/photo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile Photo"
					],
					"operation": [
						"Me Update Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /me/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile Photo"
					],
					"operation": [
						"Me Get Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile Photo"
					],
					"operation": [
						"Me Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/photo/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile Photo"
					],
					"operation": [
						"Me Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "GET /me/photos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile Photo"
					],
					"operation": [
						"Me List Photos"
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
						"Me Profile Photo"
					],
					"operation": [
						"Me List Photos"
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
						"Me Profile Photo"
					],
					"operation": [
						"Me List Photos"
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
						"Me Profile Photo"
					],
					"operation": [
						"Me List Photos"
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
						"Me Profile Photo"
					],
					"operation": [
						"Me List Photos"
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
						"Me Profile Photo"
					],
					"operation": [
						"Me List Photos"
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
						"Me Profile Photo"
					],
					"operation": [
						"Me List Photos"
					]
				}
			}
		},
		{
			"displayName": "GET /me/photos/{profilePhoto-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile Photo"
					],
					"operation": [
						"Me Get Photos"
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
						"Me Profile Photo"
					],
					"operation": [
						"Me Get Photos"
					]
				}
			}
		},
		{
			"displayName": "GET /me/photos/{profilePhoto-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile Photo"
					],
					"operation": [
						"Me Get Photos Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/photos/{profilePhoto-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile Photo"
					],
					"operation": [
						"Me Update Photos Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/photos/{profilePhoto-id}/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Profile Photo"
					],
					"operation": [
						"Me Update Photos Content"
					]
				}
			}
		},
];
