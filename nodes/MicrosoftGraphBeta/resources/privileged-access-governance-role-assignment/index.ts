import type { INodeProperties } from 'n8n-workflow';

export const privilegedAccessGovernanceRoleAssignmentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Access List Role Assignments",
					"value": "Privileged Access List Role Assignments",
					"action": "Get roleAssignments from privilegedAccess",
					"description": "A collection of role assignments for the provider.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignments"
						}
					}
				},
				{
					"name": "Privileged Access Create Role Assignments",
					"value": "Privileged Access Create Role Assignments",
					"action": "Create new navigation property to roleAssignments for privilegedAccess",
					"description": "Create new navigation property to roleAssignments for privilegedAccess",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignments"
						}
					}
				},
				{
					"name": "Privileged Access Delete Role Assignments",
					"value": "Privileged Access Delete Role Assignments",
					"action": "Delete navigation property roleAssignments for privilegedAccess",
					"description": "Delete navigation property roleAssignments for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Get Role Assignments",
					"value": "Privileged Access Get Role Assignments",
					"action": "Get roleAssignments from privilegedAccess",
					"description": "A collection of role assignments for the provider.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Update Role Assignments",
					"value": "Privileged Access Update Role Assignments",
					"action": "Update the navigation property roleAssignments in privilegedAccess",
					"description": "Update the navigation property roleAssignments in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignments Get Linked Eligible Role Assignment",
					"value": "Privileged Access Role Assignments Get Linked Eligible Role Assignment",
					"action": "Get linkedEligibleRoleAssignment from privilegedAccess",
					"description": "Read-only. If this is an active assignment and created due to activation on an eligible assignment, it represents the object of that eligible assignment; Otherwise, the value is null.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/linkedEligibleRoleAssignment"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignments Get Resource",
					"value": "Privileged Access Role Assignments Get Resource",
					"action": "Get resource from privilegedAccess",
					"description": "Read-only. The resource associated with the role assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/resource"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignments Delete Role Definition",
					"value": "Privileged Access Role Assignments Delete Role Definition",
					"action": "Delete navigation property roleDefinition for privilegedAccess",
					"description": "Delete navigation property roleDefinition for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignments Get Role Definition",
					"value": "Privileged Access Role Assignments Get Role Definition",
					"action": "Get roleDefinition from privilegedAccess",
					"description": "Read-only. The role definition associated with the role assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignments Update Role Definition",
					"value": "Privileged Access Role Assignments Update Role Definition",
					"action": "Update the navigation property roleDefinition in privilegedAccess",
					"description": "Update the navigation property roleDefinition in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignments Role Definition Get Resource",
					"value": "Privileged Access Role Assignments Role Definition Get Resource",
					"action": "Get resource from privilegedAccess",
					"description": "Read-only. The associated resource for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition/resource"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignments Role Definition Get Role Setting",
					"value": "Privileged Access Role Assignments Role Definition Get Role Setting",
					"action": "Get roleSetting from privilegedAccess",
					"description": "The associated role setting for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition/roleSetting"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignments Delete Subject",
					"value": "Privileged Access Role Assignments Delete Subject",
					"action": "Delete navigation property subject for privilegedAccess",
					"description": "Delete navigation property subject for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignments Get Subject",
					"value": "Privileged Access Role Assignments Get Subject",
					"action": "Get subject from privilegedAccess",
					"description": "Read-only. The subject associated with the role assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Privileged Access Role Assignments Update Subject",
					"value": "Privileged Access Role Assignments Update Subject",
					"action": "Update the navigation property subject in privilegedAccess",
					"description": "Update the navigation property subject in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/subject"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access List Role Assignments"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access List Role Assignments"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access List Role Assignments"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access List Role Assignments"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access List Role Assignments"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access List Role Assignments"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access List Role Assignments"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access List Role Assignments"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/roleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Delete Role Assignments"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Delete Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Get Role Assignments"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Get Role Assignments"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Get Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Get Linked Eligible Role Assignment"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Get Linked Eligible Role Assignment"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Get Linked Eligible Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Get Resource"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Get Resource"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Get Resource"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Delete Role Definition"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Delete Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Get Role Definition"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Get Role Definition"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Role Definition Get Resource"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Role Definition Get Resource"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Role Definition Get Role Setting"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Role Definition Get Role Setting"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Role Definition Get Role Setting"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Delete Subject"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Delete Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Get Subject"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Get Subject"
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
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Get Subject"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Update Subject"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Assignment"
					],
					"operation": [
						"Privileged Access Role Assignments Update Subject"
					]
				}
			}
		},
];
