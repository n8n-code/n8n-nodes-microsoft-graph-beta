import type { INodeProperties } from 'n8n-workflow';

export const teamsProfilePhotoDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Profile Photo"
					]
				}
			},
			"options": [
				{
					"name": "Teams Delete Photo",
					"value": "Teams Delete Photo",
					"action": "Delete navigation property photo for teams",
					"description": "Delete navigation property photo for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Teams Get Photo",
					"value": "Teams Get Photo",
					"action": "Get photo from teams",
					"description": "The team photo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Teams Update Photo",
					"value": "Teams Update Photo",
					"action": "Update the navigation property photo in teams",
					"description": "Update the navigation property photo in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Teams Get Photo Content",
					"value": "Teams Get Photo Content",
					"action": "Get media content for the navigation property photo from teams",
					"description": "Get media content for the navigation property photo from teams",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Teams Update Photo Content",
					"value": "Teams Update Photo Content",
					"action": "Update media content for the navigation property photo in teams",
					"description": "Update media content for the navigation property photo in teams",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/photo/$value"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /teams/{team-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Profile Photo"
					],
					"operation": [
						"Teams Delete Photo"
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
						"Teams Profile Photo"
					],
					"operation": [
						"Teams Delete Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Profile Photo"
					],
					"operation": [
						"Teams Get Photo"
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
						"Teams Profile Photo"
					],
					"operation": [
						"Teams Get Photo"
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
						"Teams Profile Photo"
					],
					"operation": [
						"Teams Get Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Profile Photo"
					],
					"operation": [
						"Teams Update Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/photo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Profile Photo"
					],
					"operation": [
						"Teams Update Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Profile Photo"
					],
					"operation": [
						"Teams Get Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /teams/{team-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Profile Photo"
					],
					"operation": [
						"Teams Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /teams/{team-id}/photo/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Profile Photo"
					],
					"operation": [
						"Teams Update Photo Content"
					]
				}
			}
		},
];
