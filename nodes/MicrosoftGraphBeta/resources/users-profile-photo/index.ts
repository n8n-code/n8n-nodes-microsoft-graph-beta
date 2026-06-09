import type { INodeProperties } from 'n8n-workflow';

export const usersProfilePhotoDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile Photo"
					]
				}
			},
			"options": [
				{
					"name": "Users Get Photo",
					"value": "Users Get Photo",
					"action": "Get photo from users",
					"description": "The user's profile photo. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Users Update Photo",
					"value": "Users Update Photo",
					"action": "Update the navigation property photo in users",
					"description": "Update the navigation property photo in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Users Get Photo Content",
					"value": "Users Get Photo Content",
					"action": "Get media content for the navigation property photo from users",
					"description": "Get media content for the navigation property photo from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Users Update Photo Content",
					"value": "Users Update Photo Content",
					"action": "Update media content for the navigation property photo in users",
					"description": "Update media content for the navigation property photo in users",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Users List Photos",
					"value": "Users List Photos",
					"action": "Get photos from users",
					"description": "Get photos from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/photos"
						}
					}
				},
				{
					"name": "Users Get Photos",
					"value": "Users Get Photos",
					"action": "Get photos from users",
					"description": "Get photos from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/photos/{{$parameter[\"profilePhoto-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Photos Content",
					"value": "Users Get Photos Content",
					"action": "Get media content for the navigation property photos from users",
					"description": "Get media content for the navigation property photos from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/photos/{{$parameter[\"profilePhoto-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Users Update Photos Content",
					"value": "Users Update Photos Content",
					"action": "Update media content for the navigation property photos in users",
					"description": "Update media content for the navigation property photos in users",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/photos/{{$parameter[\"profilePhoto-id\"]}}/$value"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile Photo"
					],
					"operation": [
						"Users Get Photo"
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
						"Users Profile Photo"
					],
					"operation": [
						"Users Get Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile Photo"
					],
					"operation": [
						"Users Update Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/photo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile Photo"
					],
					"operation": [
						"Users Update Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile Photo"
					],
					"operation": [
						"Users Get Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile Photo"
					],
					"operation": [
						"Users Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/photo/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile Photo"
					],
					"operation": [
						"Users Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/photos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile Photo"
					],
					"operation": [
						"Users List Photos"
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
						"Users Profile Photo"
					],
					"operation": [
						"Users List Photos"
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
						"Users Profile Photo"
					],
					"operation": [
						"Users List Photos"
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
						"Users Profile Photo"
					],
					"operation": [
						"Users List Photos"
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
						"Users Profile Photo"
					],
					"operation": [
						"Users List Photos"
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
						"Users Profile Photo"
					],
					"operation": [
						"Users List Photos"
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
						"Users Profile Photo"
					],
					"operation": [
						"Users List Photos"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/photos/{profilePhoto-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile Photo"
					],
					"operation": [
						"Users Get Photos"
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
						"Users Profile Photo"
					],
					"operation": [
						"Users Get Photos"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/photos/{profilePhoto-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile Photo"
					],
					"operation": [
						"Users Get Photos Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/photos/{profilePhoto-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile Photo"
					],
					"operation": [
						"Users Update Photos Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/photos/{profilePhoto-id}/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Profile Photo"
					],
					"operation": [
						"Users Update Photos Content"
					]
				}
			}
		},
];
