import type { INodeProperties } from 'n8n-workflow';

export const tenantRelationshipsDelegatedAdminRelationshipDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					]
				}
			},
			"options": [
				{
					"name": "Tenant Relationships List Delegated Admin Relationships",
					"value": "Tenant Relationships List Delegated Admin Relationships",
					"action": "List delegatedAdminRelationships",
					"description": "Get a list of the delegatedAdminRelationship objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/delegatedAdminRelationships"
						}
					}
				},
				{
					"name": "Tenant Relationships Create Delegated Admin Relationships",
					"value": "Tenant Relationships Create Delegated Admin Relationships",
					"action": "Create delegatedAdminRelationship",
					"description": "Create a new delegatedAdminRelationship object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/delegatedAdminRelationships"
						}
					}
				},
				{
					"name": "Tenant Relationships Delete Delegated Admin Relationships",
					"value": "Tenant Relationships Delete Delegated Admin Relationships",
					"action": "Delete navigation property delegatedAdminRelationships for tenantRelationships",
					"description": "Delete navigation property delegatedAdminRelationships for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Get Delegated Admin Relationships",
					"value": "Tenant Relationships Get Delegated Admin Relationships",
					"action": "Get delegatedAdminRelationships from tenantRelationships",
					"description": "The details of the delegated administrative privileges that a Microsoft partner has in a customer tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Update Delegated Admin Relationships",
					"value": "Tenant Relationships Update Delegated Admin Relationships",
					"action": "Update the navigation property delegatedAdminRelationships in tenantRelationships",
					"description": "Update the navigation property delegatedAdminRelationships in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationships List Access Assignments",
					"value": "Tenant Relationships Delegated Admin Relationships List Access Assignments",
					"action": "List accessAssignments",
					"description": "Get a list of the delegatedAdminAccessAssignment objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}/accessAssignments"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationships Create Access Assignments",
					"value": "Tenant Relationships Delegated Admin Relationships Create Access Assignments",
					"action": "Create accessAssignments",
					"description": "Create a new delegatedAdminAccessAssignment object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}/accessAssignments"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationships Delete Access Assignments",
					"value": "Tenant Relationships Delegated Admin Relationships Delete Access Assignments",
					"action": "Delete navigation property accessAssignments for tenantRelationships",
					"description": "Delete navigation property accessAssignments for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}/accessAssignments/{{$parameter[\"delegatedAdminAccessAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationships Get Access Assignments",
					"value": "Tenant Relationships Delegated Admin Relationships Get Access Assignments",
					"action": "Get accessAssignments from tenantRelationships",
					"description": "The access assignments associated with the delegated admin relationship.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}/accessAssignments/{{$parameter[\"delegatedAdminAccessAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationships Update Access Assignments",
					"value": "Tenant Relationships Delegated Admin Relationships Update Access Assignments",
					"action": "Update the navigation property accessAssignments in tenantRelationships",
					"description": "Update the navigation property accessAssignments in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}/accessAssignments/{{$parameter[\"delegatedAdminAccessAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationships List Operations",
					"value": "Tenant Relationships Delegated Admin Relationships List Operations",
					"action": "List operations",
					"description": "Get a list of the delegatedAdminRelationshipOperation objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationships Create Operations",
					"value": "Tenant Relationships Delegated Admin Relationships Create Operations",
					"action": "Create new navigation property to operations for tenantRelationships",
					"description": "Create new navigation property to operations for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationships Delete Operations",
					"value": "Tenant Relationships Delegated Admin Relationships Delete Operations",
					"action": "Delete navigation property operations for tenantRelationships",
					"description": "Delete navigation property operations for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}/operations/{{$parameter[\"delegatedAdminRelationshipOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationships Get Operations",
					"value": "Tenant Relationships Delegated Admin Relationships Get Operations",
					"action": "Get operations from tenantRelationships",
					"description": "The long running operations associated with the delegated admin relationship.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}/operations/{{$parameter[\"delegatedAdminRelationshipOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationships Update Operations",
					"value": "Tenant Relationships Delegated Admin Relationships Update Operations",
					"action": "Update the navigation property operations in tenantRelationships",
					"description": "Update the navigation property operations in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}/operations/{{$parameter[\"delegatedAdminRelationshipOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationships List Requests",
					"value": "Tenant Relationships Delegated Admin Relationships List Requests",
					"action": "List requests",
					"description": "Get a list of the delegatedAdminRelationshipRequest objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}/requests"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationships Create Requests",
					"value": "Tenant Relationships Delegated Admin Relationships Create Requests",
					"action": "Create requests",
					"description": "Create a new delegatedAdminRelationshipRequest object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}/requests"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationships Delete Requests",
					"value": "Tenant Relationships Delegated Admin Relationships Delete Requests",
					"action": "Delete navigation property requests for tenantRelationships",
					"description": "Delete navigation property requests for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}/requests/{{$parameter[\"delegatedAdminRelationshipRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationships Get Requests",
					"value": "Tenant Relationships Delegated Admin Relationships Get Requests",
					"action": "Get requests from tenantRelationships",
					"description": "The requests associated with the delegated admin relationship.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}/requests/{{$parameter[\"delegatedAdminRelationshipRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Relationships Update Requests",
					"value": "Tenant Relationships Delegated Admin Relationships Update Requests",
					"action": "Update the navigation property requests in tenantRelationships",
					"description": "Update the navigation property requests in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/delegatedAdminRelationships/{{$parameter[\"delegatedAdminRelationship-id\"]}}/requests/{{$parameter[\"delegatedAdminRelationshipRequest-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /tenantRelationships/delegatedAdminRelationships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Relationships"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Relationships"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Relationships"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Relationships"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Relationships"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Relationships"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Relationships"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Relationships"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Relationships"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/delegatedAdminRelationships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Create Delegated Admin Relationships"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/delegatedAdminRelationships<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Create Delegated Admin Relationships"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delete Delegated Admin Relationships"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delete Delegated Admin Relationships"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Get Delegated Admin Relationships"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Get Delegated Admin Relationships"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Get Delegated Admin Relationships"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Update Delegated Admin Relationships"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Update Delegated Admin Relationships"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Access Assignments"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Access Assignments"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Access Assignments"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Access Assignments"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Access Assignments"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Access Assignments"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Access Assignments"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Access Assignments"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Access Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Create Access Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Create Access Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Delete Access Assignments"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Delete Access Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Get Access Assignments"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Get Access Assignments"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Get Access Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Update Access Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Update Access Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Operations"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Operations"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Operations"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Operations"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Operations"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Operations"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Operations"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Operations"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Delete Operations"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Get Operations"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Get Operations"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Requests"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Requests"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Requests"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Requests"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Requests"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Requests"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Requests"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Requests"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships List Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Create Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Create Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Delete Requests"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Delete Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Get Requests"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Get Requests"
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
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Get Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Update Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Relationship"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Relationships Update Requests"
					]
				}
			}
		},
];
