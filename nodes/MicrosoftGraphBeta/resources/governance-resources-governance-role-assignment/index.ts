import type { INodeProperties } from 'n8n-workflow';

export const governanceResourcesGovernanceRoleAssignmentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					]
				}
			},
			"options": [
				{
					"name": "Governance Resources List Role Assignments",
					"value": "Governance Resources List Role Assignments",
					"action": "Get roleAssignments from governanceResources",
					"description": "The collection of role assignments for the resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments"
						}
					}
				},
				{
					"name": "Governance Resources Create Role Assignments",
					"value": "Governance Resources Create Role Assignments",
					"action": "Create new navigation property to roleAssignments for governanceResources",
					"description": "Create new navigation property to roleAssignments for governanceResources",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments"
						}
					}
				},
				{
					"name": "Governance Resources Delete Role Assignments",
					"value": "Governance Resources Delete Role Assignments",
					"action": "Delete navigation property roleAssignments for governanceResources",
					"description": "Delete navigation property roleAssignments for governanceResources",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Resources Get Role Assignments",
					"value": "Governance Resources Get Role Assignments",
					"action": "Get roleAssignments from governanceResources",
					"description": "The collection of role assignments for the resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Resources Update Role Assignments",
					"value": "Governance Resources Update Role Assignments",
					"action": "Update the navigation property roleAssignments in governanceResources",
					"description": "Update the navigation property roleAssignments in governanceResources",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Resources Role Assignments Get Linked Eligible Role Assignment",
					"value": "Governance Resources Role Assignments Get Linked Eligible Role Assignment",
					"action": "Get linkedEligibleRoleAssignment from governanceResources",
					"description": "Read-only. If this is an active assignment and created due to activation on an eligible assignment, it represents the object of that eligible assignment; Otherwise, the value is null.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/linkedEligibleRoleAssignment"
						}
					}
				},
				{
					"name": "Governance Resources Role Assignments Get Resource",
					"value": "Governance Resources Role Assignments Get Resource",
					"action": "Get resource from governanceResources",
					"description": "Read-only. The resource associated with the role assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/resource"
						}
					}
				},
				{
					"name": "Governance Resources Role Assignments Delete Role Definition",
					"value": "Governance Resources Role Assignments Delete Role Definition",
					"action": "Delete navigation property roleDefinition for governanceResources",
					"description": "Delete navigation property roleDefinition for governanceResources",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Governance Resources Role Assignments Get Role Definition",
					"value": "Governance Resources Role Assignments Get Role Definition",
					"action": "Get roleDefinition from governanceResources",
					"description": "Read-only. The role definition associated with the role assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Governance Resources Role Assignments Update Role Definition",
					"value": "Governance Resources Role Assignments Update Role Definition",
					"action": "Update the navigation property roleDefinition in governanceResources",
					"description": "Update the navigation property roleDefinition in governanceResources",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Governance Resources Role Assignments Role Definition Get Resource",
					"value": "Governance Resources Role Assignments Role Definition Get Resource",
					"action": "Get resource from governanceResources",
					"description": "Read-only. The associated resource for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition/resource"
						}
					}
				},
				{
					"name": "Governance Resources Role Assignments Role Definition Get Role Setting",
					"value": "Governance Resources Role Assignments Role Definition Get Role Setting",
					"action": "Get roleSetting from governanceResources",
					"description": "The associated role setting for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/roleDefinition/roleSetting"
						}
					}
				},
				{
					"name": "Governance Resources Role Assignments Delete Subject",
					"value": "Governance Resources Role Assignments Delete Subject",
					"action": "Delete navigation property subject for governanceResources",
					"description": "Delete navigation property subject for governanceResources",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Governance Resources Role Assignments Get Subject",
					"value": "Governance Resources Role Assignments Get Subject",
					"action": "Get subject from governanceResources",
					"description": "Read-only. The subject associated with the role assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/subject"
						}
					}
				},
				{
					"name": "Governance Resources Role Assignments Update Subject",
					"value": "Governance Resources Role Assignments Update Subject",
					"action": "Update the navigation property subject in governanceResources",
					"description": "Update the navigation property subject in governanceResources",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/subject"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources List Role Assignments"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources List Role Assignments"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources List Role Assignments"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources List Role Assignments"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources List Role Assignments"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources List Role Assignments"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources List Role Assignments"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources List Role Assignments"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceResources/{governanceResource-id}/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceResources/{governanceResource-id}/roleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Delete Role Assignments"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Delete Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Get Role Assignments"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Get Role Assignments"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Get Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Get Linked Eligible Role Assignment"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Get Linked Eligible Role Assignment"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Get Linked Eligible Role Assignment"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Get Resource"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Get Resource"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Get Resource"
					]
				}
			}
		},
		{
			"displayName": "DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Delete Role Definition"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Delete Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Get Role Definition"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Get Role Definition"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Role Definition Get Resource"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Role Definition Get Resource"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/roleDefinition/roleSetting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Role Definition Get Role Setting"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Role Definition Get Role Setting"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Role Definition Get Role Setting"
					]
				}
			}
		},
		{
			"displayName": "DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Delete Subject"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Delete Subject"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Get Subject"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Get Subject"
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
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Get Subject"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Update Subject"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Assignment"
					],
					"operation": [
						"Governance Resources Role Assignments Update Subject"
					]
				}
			}
		},
];
