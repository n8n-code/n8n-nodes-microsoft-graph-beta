import type { INodeProperties } from 'n8n-workflow';

export const privilegedAccessGovernanceRoleAssignmentRequestDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Access List Role Assignment Requests",
					"value": "Privileged Access List Role Assignment Requests",
					"action": "Get roleAssignmentRequests from privilegedAccess",
					"description": "A collection of role assignment requests for the provider.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests"
						}
					}
				},
				{
					"name": "Privileged Access Create Role Assignment Requests",
					"value": "Privileged Access Create Role Assignment Requests",
					"action": "Create governanceRoleAssignmentRequest",
					"description": "Create a role assignment request to represent the operation you want on a role assignment. The following table lists the operations.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests"
						}
					}
				},
				{
					"name": "Privileged Access Delete Role Assignment Requests",
					"value": "Privileged Access Delete Role Assignment Requests",
					"action": "Delete navigation property roleAssignmentRequests for privilegedAccess",
					"description": "Delete navigation property roleAssignmentRequests for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Get Role Assignment Requests",
					"value": "Privileged Access Get Role Assignment Requests",
					"action": "Get roleAssignmentRequests from privilegedAccess",
					"description": "A collection of role assignment requests for the provider.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Update Role Assignment Requests",
					"value": "Privileged Access Update Role Assignment Requests",
					"action": "Update the navigation property roleAssignmentRequests in privilegedAccess",
					"description": "Update the navigation property roleAssignmentRequests in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignment Requests Get Resource",
					"value": "Privileged Access Role Assignment Requests Get Resource",
					"action": "Get resource from privilegedAccess",
					"description": "Read-only. The resource that the request aims to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/resource"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignment Requests Delete Role Definition",
					"value": "Privileged Access Role Assignment Requests Delete Role Definition",
					"action": "Delete navigation property roleDefinition for privilegedAccess",
					"description": "Delete navigation property roleDefinition for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignment Requests Get Role Definition",
					"value": "Privileged Access Role Assignment Requests Get Role Definition",
					"action": "Get roleDefinition from privilegedAccess",
					"description": "Read-only. The role definition that the request aims to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignment Requests Update Role Definition",
					"value": "Privileged Access Role Assignment Requests Update Role Definition",
					"action": "Update the navigation property roleDefinition in privilegedAccess",
					"description": "Update the navigation property roleDefinition in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignment Requests Role Definition Get Resource",
					"value": "Privileged Access Role Assignment Requests Role Definition Get Resource",
					"action": "Get resource from privilegedAccess",
					"description": "Read-only. The associated resource for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/roleDefinition/resource"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignment Requests Role Definition Get Role Setting",
					"value": "Privileged Access Role Assignment Requests Role Definition Get Role Setting",
					"action": "Get roleSetting from privilegedAccess",
					"description": "The associated role setting for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/roleDefinition/roleSetting"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignment Requests Delete Subject",
					"value": "Privileged Access Role Assignment Requests Delete Subject",
					"action": "Delete navigation property subject for privilegedAccess",
					"description": "Delete navigation property subject for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignment Requests Get Subject",
					"value": "Privileged Access Role Assignment Requests Get Subject",
					"action": "Get subject from privilegedAccess",
					"description": "Read-only. The user/group principal.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignment Requests Update Subject",
					"value": "Privileged Access Role Assignment Requests Update Subject",
					"action": "Update the navigation property subject in privilegedAccess",
					"description": "Update the navigation property subject in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/subject"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access List Role Assignment Requests"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access List Role Assignment Requests"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access List Role Assignment Requests"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access List Role Assignment Requests"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access List Role Assignment Requests"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access List Role Assignment Requests"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access List Role Assignment Requests"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access List Role Assignment Requests"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access List Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Create Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Create Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Delete Role Assignment Requests"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Delete Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Get Role Assignment Requests"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Get Role Assignment Requests"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Get Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Update Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Update Role Assignment Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Get Resource"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Get Resource"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Get Resource"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Delete Role Definition"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Delete Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Get Role Definition"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Get Role Definition"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Role Definition Get Resource"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Role Definition Get Resource"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/roleDefinition/roleSetting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Role Definition Get Role Setting"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Role Definition Get Role Setting"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Role Definition Get Role Setting"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Delete Subject"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Delete Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Get Subject"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Get Subject"
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
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Get Subject"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Update Subject"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment Request"
					],
					"operation": [
						"Privileged Access Role Assignment Requests Update Subject"
					]
				}
			}
		},
];
