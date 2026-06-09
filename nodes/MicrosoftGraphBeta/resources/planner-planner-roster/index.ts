import type { INodeProperties } from 'n8n-workflow';

export const plannerPlannerRosterDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					]
				}
			},
			"options": [
				{
					"name": "Planner List Rosters",
					"value": "Planner List Rosters",
					"action": "Get rosters from planner",
					"description": "Read-only. Nullable. Returns a collection of the specified rosters",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/rosters"
						}
					}
				},
				{
					"name": "Planner Create Rosters",
					"value": "Planner Create Rosters",
					"action": "Create plannerRoster",
					"description": "Create a new plannerRoster object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/planner/rosters"
						}
					}
				},
				{
					"name": "Planner Delete Rosters",
					"value": "Planner Delete Rosters",
					"action": "Delete navigation property rosters for planner",
					"description": "Delete navigation property rosters for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/rosters/{{$parameter[\"plannerRoster-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Get Rosters",
					"value": "Planner Get Rosters",
					"action": "Get rosters from planner",
					"description": "Read-only. Nullable. Returns a collection of the specified rosters",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/rosters/{{$parameter[\"plannerRoster-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Update Rosters",
					"value": "Planner Update Rosters",
					"action": "Update the navigation property rosters in planner",
					"description": "Update the navigation property rosters in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/rosters/{{$parameter[\"plannerRoster-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Rosters List Members",
					"value": "Planner Rosters List Members",
					"action": "List members of a roster",
					"description": "Get the list of plannerRosterMembers from a plannerRoster.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/rosters/{{$parameter[\"plannerRoster-id\"]}}/members"
						}
					}
				},
				{
					"name": "Planner Rosters Create Members",
					"value": "Planner Rosters Create Members",
					"action": "Create plannerRosterMember",
					"description": "Add a member to the plannerRoster object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/planner/rosters/{{$parameter[\"plannerRoster-id\"]}}/members"
						}
					}
				},
				{
					"name": "Planner Rosters Delete Members",
					"value": "Planner Rosters Delete Members",
					"action": "Delete navigation property members for planner",
					"description": "Delete navigation property members for planner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/planner/rosters/{{$parameter[\"plannerRoster-id\"]}}/members/{{$parameter[\"plannerRosterMember-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Rosters Get Members",
					"value": "Planner Rosters Get Members",
					"action": "Get members from planner",
					"description": "Retrieves the members of the plannerRoster.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/rosters/{{$parameter[\"plannerRoster-id\"]}}/members/{{$parameter[\"plannerRosterMember-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Rosters Update Members",
					"value": "Planner Rosters Update Members",
					"action": "Update the navigation property members in planner",
					"description": "Update the navigation property members in planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner/rosters/{{$parameter[\"plannerRoster-id\"]}}/members/{{$parameter[\"plannerRosterMember-id\"]}}"
						}
					}
				},
				{
					"name": "Planner Rosters List Plans",
					"value": "Planner Rosters List Plans",
					"action": "List plans",
					"description": "Get the plannerPlans contained by the plannerRoster.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/rosters/{{$parameter[\"plannerRoster-id\"]}}/plans"
						}
					}
				},
				{
					"name": "Planner Rosters Get Plans",
					"value": "Planner Rosters Get Plans",
					"action": "Get plans from planner",
					"description": "Retrieves the plans contained by the plannerRoster.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner/rosters/{{$parameter[\"plannerRoster-id\"]}}/plans/{{$parameter[\"plannerPlan-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /planner/rosters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner List Rosters"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner List Rosters"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner List Rosters"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner List Rosters"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner List Rosters"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner List Rosters"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner List Rosters"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner List Rosters"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner List Rosters"
					]
				}
			}
		},
		{
			"displayName": "POST /planner/rosters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Create Rosters"
					]
				}
			}
		},
		{
			"displayName": "POST /planner/rosters<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Create Rosters"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/rosters/{plannerRoster-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Delete Rosters"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Delete Rosters"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/rosters/{plannerRoster-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Get Rosters"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Get Rosters"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Get Rosters"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/rosters/{plannerRoster-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Update Rosters"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/rosters/{plannerRoster-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Update Rosters"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/rosters/{plannerRoster-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Members"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Members"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Members"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Members"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Members"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Members"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Members"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Members"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /planner/rosters/{plannerRoster-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /planner/rosters/{plannerRoster-id}/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters Delete Members"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters Get Members"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters Get Members"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters Update Members"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/rosters/{plannerRoster-id}/plans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Plans"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Plans"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Plans"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Plans"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Plans"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Plans"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Plans"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Plans"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters List Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /planner/rosters/{plannerRoster-id}/plans/{plannerPlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters Get Plans"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters Get Plans"
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
						"Planner Planner Roster"
					],
					"operation": [
						"Planner Rosters Get Plans"
					]
				}
			}
		},
];
