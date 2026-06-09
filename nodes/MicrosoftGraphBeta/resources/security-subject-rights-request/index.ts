import type { INodeProperties } from 'n8n-workflow';

export const securitySubjectRightsRequestDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					]
				}
			},
			"options": [
				{
					"name": "Security List Subject Rights Requests",
					"value": "Security List Subject Rights Requests",
					"action": "Get subjectRightsRequests from security",
					"description": "Get subjectRightsRequests from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/subjectRightsRequests"
						}
					}
				},
				{
					"name": "Security Create Subject Rights Requests",
					"value": "Security Create Subject Rights Requests",
					"action": "Create new navigation property to subjectRightsRequests for security",
					"description": "Create new navigation property to subjectRightsRequests for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/subjectRightsRequests"
						}
					}
				},
				{
					"name": "Security Delete Subject Rights Requests",
					"value": "Security Delete Subject Rights Requests",
					"action": "Delete navigation property subjectRightsRequests for security",
					"description": "Delete navigation property subjectRightsRequests for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/subjectRightsRequests/{{$parameter[\"subjectRightsRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Security Get Subject Rights Requests",
					"value": "Security Get Subject Rights Requests",
					"action": "Get subjectRightsRequests from security",
					"description": "Get subjectRightsRequests from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/subjectRightsRequests/{{$parameter[\"subjectRightsRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Security Update Subject Rights Requests",
					"value": "Security Update Subject Rights Requests",
					"action": "Update the navigation property subjectRightsRequests in security",
					"description": "Update the navigation property subjectRightsRequests in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/subjectRightsRequests/{{$parameter[\"subjectRightsRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Security Subject Rights Requests List Notes",
					"value": "Security Subject Rights Requests List Notes",
					"action": "List notes",
					"description": "Get the list of authored notes associated with a subject rights request. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/subjectRightsRequests/{{$parameter[\"subjectRightsRequest-id\"]}}/notes"
						}
					}
				},
				{
					"name": "Security Subject Rights Requests Create Notes",
					"value": "Security Subject Rights Requests Create Notes",
					"action": "Create authoredNote",
					"description": "Create a new authoredNote object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/subjectRightsRequests/{{$parameter[\"subjectRightsRequest-id\"]}}/notes"
						}
					}
				},
				{
					"name": "Security Subject Rights Requests Delete Notes",
					"value": "Security Subject Rights Requests Delete Notes",
					"action": "Delete navigation property notes for security",
					"description": "Delete navigation property notes for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/subjectRightsRequests/{{$parameter[\"subjectRightsRequest-id\"]}}/notes/{{$parameter[\"authoredNote-id\"]}}"
						}
					}
				},
				{
					"name": "Security Subject Rights Requests Get Notes",
					"value": "Security Subject Rights Requests Get Notes",
					"action": "Get notes from security",
					"description": "List of notes associated with the request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/subjectRightsRequests/{{$parameter[\"subjectRightsRequest-id\"]}}/notes/{{$parameter[\"authoredNote-id\"]}}"
						}
					}
				},
				{
					"name": "Security Subject Rights Requests Update Notes",
					"value": "Security Subject Rights Requests Update Notes",
					"action": "Update the navigation property notes in security",
					"description": "Update the navigation property notes in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/subjectRightsRequests/{{$parameter[\"subjectRightsRequest-id\"]}}/notes/{{$parameter[\"authoredNote-id\"]}}"
						}
					}
				},
				{
					"name": "Security Subject Rights Requests Get Team",
					"value": "Security Subject Rights Requests Get Team",
					"action": "Get team from security",
					"description": "Information about the Microsoft Teams team that was created for the request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/subjectRightsRequests/{{$parameter[\"subjectRightsRequest-id\"]}}/team"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /security/subjectRightsRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					],
					"operation": [
						"Security List Subject Rights Requests"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security List Subject Rights Requests"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security List Subject Rights Requests"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security List Subject Rights Requests"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security List Subject Rights Requests"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security List Subject Rights Requests"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security List Subject Rights Requests"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security List Subject Rights Requests"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security List Subject Rights Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /security/subjectRightsRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Create Subject Rights Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /security/subjectRightsRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Create Subject Rights Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Delete Subject Rights Requests"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Delete Subject Rights Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /security/subjectRightsRequests/{subjectRightsRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Get Subject Rights Requests"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Get Subject Rights Requests"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Get Subject Rights Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Update Subject Rights Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Update Subject Rights Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests List Notes"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests List Notes"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests List Notes"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests List Notes"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests List Notes"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests List Notes"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests List Notes"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests List Notes"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests List Notes"
					]
				}
			}
		},
		{
			"displayName": "POST /security/subjectRightsRequests/{subjectRightsRequest-id}/notes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests Create Notes"
					]
				}
			}
		},
		{
			"displayName": "POST /security/subjectRightsRequests/{subjectRightsRequest-id}/notes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests Create Notes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests Delete Notes"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests Delete Notes"
					]
				}
			}
		},
		{
			"displayName": "GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests Get Notes"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests Get Notes"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests Get Notes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests Update Notes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests Update Notes"
					]
				}
			}
		},
		{
			"displayName": "GET /security/subjectRightsRequests/{subjectRightsRequest-id}/team",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests Get Team"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests Get Team"
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
						"Security Subject Rights Request"
					],
					"operation": [
						"Security Subject Rights Requests Get Team"
					]
				}
			}
		},
];
