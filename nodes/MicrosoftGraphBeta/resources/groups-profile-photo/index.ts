import type { INodeProperties } from 'n8n-workflow';

export const groupsProfilePhotoDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Profile Photo"
					]
				}
			},
			"options": [
				{
					"name": "Groups Get Photo",
					"value": "Groups Get Photo",
					"action": "Get photo from groups",
					"description": "The group's profile photo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Groups Update Photo",
					"value": "Groups Update Photo",
					"action": "Update the navigation property photo in groups",
					"description": "Update the navigation property photo in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Groups Get Photo Content",
					"value": "Groups Get Photo Content",
					"action": "Get media content for the navigation property photo from groups",
					"description": "Get media content for the navigation property photo from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Groups Update Photo Content",
					"value": "Groups Update Photo Content",
					"action": "Update media content for the navigation property photo in groups",
					"description": "Update media content for the navigation property photo in groups",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Groups List Photos",
					"value": "Groups List Photos",
					"action": "List photos",
					"description": "Retrieve a list of profilePhoto objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/photos"
						}
					}
				},
				{
					"name": "Groups Get Photos",
					"value": "Groups Get Photos",
					"action": "Get photos from groups",
					"description": "The profile photos owned by the group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/photos/{{$parameter[\"profilePhoto-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Get Photos Content",
					"value": "Groups Get Photos Content",
					"action": "Get media content for the navigation property photos from groups",
					"description": "Get media content for the navigation property photos from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/photos/{{$parameter[\"profilePhoto-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Groups Update Photos Content",
					"value": "Groups Update Photos Content",
					"action": "Update media content for the navigation property photos in groups",
					"description": "Update media content for the navigation property photos in groups",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/photos/{{$parameter[\"profilePhoto-id\"]}}/$value"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /groups/{group-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Profile Photo"
					],
					"operation": [
						"Groups Get Photo"
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
						"Groups Profile Photo"
					],
					"operation": [
						"Groups Get Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Profile Photo"
					],
					"operation": [
						"Groups Update Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/photo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Profile Photo"
					],
					"operation": [
						"Groups Update Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Profile Photo"
					],
					"operation": [
						"Groups Get Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Profile Photo"
					],
					"operation": [
						"Groups Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/photo/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Profile Photo"
					],
					"operation": [
						"Groups Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/photos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Profile Photo"
					],
					"operation": [
						"Groups List Photos"
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
						"Groups Profile Photo"
					],
					"operation": [
						"Groups List Photos"
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
						"Groups Profile Photo"
					],
					"operation": [
						"Groups List Photos"
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
						"Groups Profile Photo"
					],
					"operation": [
						"Groups List Photos"
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
						"Groups Profile Photo"
					],
					"operation": [
						"Groups List Photos"
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
						"Groups Profile Photo"
					],
					"operation": [
						"Groups List Photos"
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
						"Groups Profile Photo"
					],
					"operation": [
						"Groups List Photos"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/photos/{profilePhoto-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Profile Photo"
					],
					"operation": [
						"Groups Get Photos"
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
						"Groups Profile Photo"
					],
					"operation": [
						"Groups Get Photos"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/photos/{profilePhoto-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Profile Photo"
					],
					"operation": [
						"Groups Get Photos Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/photos/{profilePhoto-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Profile Photo"
					],
					"operation": [
						"Groups Update Photos Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/photos/{profilePhoto-id}/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Profile Photo"
					],
					"operation": [
						"Groups Update Photos Content"
					]
				}
			}
		},
];
