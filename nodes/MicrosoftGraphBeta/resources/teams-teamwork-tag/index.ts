import type { INodeProperties } from 'n8n-workflow';

export const teamsTeamworkTagDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teamwork Tag"
					]
				}
			},
			"options": [
				{
					"name": "Teams List Tags",
					"value": "Teams List Tags",
					"action": "List teamworkTags",
					"description": "Get a list of the tag objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/tags"
						}
					}
				},
				{
					"name": "Teams Create Tags",
					"value": "Teams Create Tags",
					"action": "Create teamworkTag",
					"description": "Create a standard tag for members in the team. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/tags"
						}
					}
				},
				{
					"name": "Teams Delete Tags",
					"value": "Teams Delete Tags",
					"action": "Delete navigation property tags for teams",
					"description": "Delete navigation property tags for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/tags/{{$parameter[\"teamworkTag-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Get Tags",
					"value": "Teams Get Tags",
					"action": "Get tags from teams",
					"description": "The tags associated with the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/tags/{{$parameter[\"teamworkTag-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Update Tags",
					"value": "Teams Update Tags",
					"action": "Update the navigation property tags in teams",
					"description": "Update the navigation property tags in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/tags/{{$parameter[\"teamworkTag-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Tags List Members",
					"value": "Teams Tags List Members",
					"action": "List members in a teamworkTag",
					"description": "Get a list of the members of a standard tag in a team and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/tags/{{$parameter[\"teamworkTag-id\"]}}/members"
						}
					}
				},
				{
					"name": "Teams Tags Create Members",
					"value": "Teams Tags Create Members",
					"action": "Create teamworkTagMember",
					"description": "Create a new teamworkTagMember object in a team.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/tags/{{$parameter[\"teamworkTag-id\"]}}/members"
						}
					}
				},
				{
					"name": "Teams Tags Delete Members",
					"value": "Teams Tags Delete Members",
					"action": "Delete navigation property members for teams",
					"description": "Delete navigation property members for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/tags/{{$parameter[\"teamworkTag-id\"]}}/members/{{$parameter[\"teamworkTagMember-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Tags Get Members",
					"value": "Teams Tags Get Members",
					"action": "Get members from teams",
					"description": "Users assigned to the tag.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/tags/{{$parameter[\"teamworkTag-id\"]}}/members/{{$parameter[\"teamworkTagMember-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Tags Update Members",
					"value": "Teams Tags Update Members",
					"action": "Update the navigation property members in teams",
					"description": "Update the navigation property members in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/tags/{{$parameter[\"teamworkTag-id\"]}}/members/{{$parameter[\"teamworkTagMember-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /teams/{team-id}/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams List Tags"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams List Tags"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams List Tags"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams List Tags"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams List Tags"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams List Tags"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams List Tags"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams List Tags"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams List Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Create Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/tags<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Create Tags"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{team-id}/tags/{teamworkTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Delete Tags"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Delete Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/tags/{teamworkTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Get Tags"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Get Tags"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Get Tags"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/tags/{teamworkTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Update Tags"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/tags/{teamworkTag-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Update Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/tags/{teamworkTag-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags List Members"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags List Members"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags List Members"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags List Members"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags List Members"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags List Members"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags List Members"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags List Members"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/tags/{teamworkTag-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/tags/{teamworkTag-id}/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags Delete Members"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags Get Members"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags Get Members"
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
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teamwork Tag"
					],
					"operation": [
						"Teams Tags Update Members"
					]
				}
			}
		},
];
