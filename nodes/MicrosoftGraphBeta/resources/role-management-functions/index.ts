import type { INodeProperties } from 'n8n-workflow';

export const roleManagementFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					]
				}
			},
			"options": [
				{
					"name": "Role Management Cloud PC Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals",
					"value": "Role Management Cloud PC Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals",
					"action": "Invoke function assignedPrincipals",
					"description": "Invoke function assignedPrincipals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Definitions Unified Role Definition Assigned Principals",
					"value": "Role Management Cloud PC Role Definitions Unified Role Definition Assigned Principals",
					"action": "Invoke function assignedPrincipals",
					"description": "Invoke function assignedPrincipals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals",
					"value": "Role Management Device Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals",
					"action": "Invoke function assignedPrincipals",
					"description": "Invoke function assignedPrincipals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Definitions Unified Role Definition Assigned Principals",
					"value": "Role Management Device Management Role Definitions Unified Role Definition Assigned Principals",
					"action": "Invoke function assignedPrincipals",
					"description": "Invoke function assignedPrincipals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')"
						}
					}
				},
				{
					"name": "Role Management Directory Role Schedule Instances",
					"value": "Role Management Directory Role Schedule Instances",
					"action": "Invoke function roleScheduleInstances",
					"description": "Invoke function roleScheduleInstances",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/microsoft.graph.roleScheduleInstances(directoryScopeId='@directoryScopeId',appScopeId='@appScopeId',principalId='@principalId',roleDefinitionId='@roleDefinitionId')"
						}
					}
				},
				{
					"name": "Role Management Directory Role Schedules",
					"value": "Role Management Directory Role Schedules",
					"action": "Invoke function roleSchedules",
					"description": "Invoke function roleSchedules",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/microsoft.graph.roleSchedules(directoryScopeId='@directoryScopeId',appScopeId='@appScopeId',principalId='@principalId',roleDefinitionId='@roleDefinitionId')"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Approvals Filter By Current User",
					"value": "Role Management Directory Role Assignment Approvals Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentApprovals/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Schedule Instances Filter By Current User",
					"value": "Role Management Directory Role Assignment Schedule Instances Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentScheduleInstances/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Schedule Requests Filter By Current User",
					"value": "Role Management Directory Role Assignment Schedule Requests Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentScheduleRequests/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Schedules Filter By Current User",
					"value": "Role Management Directory Role Assignment Schedules Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleAssignmentSchedules/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Role Management Directory Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals",
					"value": "Role Management Directory Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals",
					"action": "Invoke function assignedPrincipals",
					"description": "Invoke function assignedPrincipals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')"
						}
					}
				},
				{
					"name": "Role Management Directory Role Definitions Unified Role Definition Assigned Principals",
					"value": "Role Management Directory Role Definitions Unified Role Definition Assigned Principals",
					"action": "Invoke function assignedPrincipals",
					"description": "Invoke function assignedPrincipals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')"
						}
					}
				},
				{
					"name": "Role Management Directory Role Eligibility Schedule Instances Filter By Current User",
					"value": "Role Management Directory Role Eligibility Schedule Instances Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleEligibilityScheduleInstances/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Role Management Directory Role Eligibility Schedule Requests Filter By Current User",
					"value": "Role Management Directory Role Eligibility Schedule Requests Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleEligibilityScheduleRequests/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Role Management Directory Role Eligibility Schedules Filter By Current User",
					"value": "Role Management Directory Role Eligibility Schedules Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/directory/roleEligibilitySchedules/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Schedule Instances",
					"value": "Role Management Entitlement Management Role Schedule Instances",
					"action": "Invoke function roleScheduleInstances",
					"description": "Invoke function roleScheduleInstances",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/microsoft.graph.roleScheduleInstances(directoryScopeId='@directoryScopeId',appScopeId='@appScopeId',principalId='@principalId',roleDefinitionId='@roleDefinitionId')"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Schedules",
					"value": "Role Management Entitlement Management Role Schedules",
					"action": "Invoke function roleSchedules",
					"description": "Invoke function roleSchedules",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/microsoft.graph.roleSchedules(directoryScopeId='@directoryScopeId',appScopeId='@appScopeId',principalId='@principalId',roleDefinitionId='@roleDefinitionId')"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Approvals Filter By Current User",
					"value": "Role Management Entitlement Management Role Assignment Approvals Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentApprovals/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Schedule Instances Filter By Current User",
					"value": "Role Management Entitlement Management Role Assignment Schedule Instances Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Schedule Requests Filter By Current User",
					"value": "Role Management Entitlement Management Role Assignment Schedule Requests Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Schedules Filter By Current User",
					"value": "Role Management Entitlement Management Role Assignment Schedules Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentSchedules/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals",
					"value": "Role Management Entitlement Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals",
					"action": "Invoke function assignedPrincipals",
					"description": "Invoke function assignedPrincipals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Definitions Unified Role Definition Assigned Principals",
					"value": "Role Management Entitlement Management Role Definitions Unified Role Definition Assigned Principals",
					"action": "Invoke function assignedPrincipals",
					"description": "Invoke function assignedPrincipals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Eligibility Schedule Instances Filter By Current User",
					"value": "Role Management Entitlement Management Role Eligibility Schedule Instances Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleInstances/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Eligibility Schedule Requests Filter By Current User",
					"value": "Role Management Entitlement Management Role Eligibility Schedule Requests Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleRequests/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Eligibility Schedules Filter By Current User",
					"value": "Role Management Entitlement Management Role Eligibility Schedules Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/entitlementManagement/roleEligibilitySchedules/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Role Management Exchange Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals",
					"value": "Role Management Exchange Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals",
					"action": "Invoke function assignedPrincipals",
					"description": "Invoke function assignedPrincipals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')"
						}
					}
				},
				{
					"name": "Role Management Exchange Role Definitions Unified Role Definition Assigned Principals",
					"value": "Role Management Exchange Role Definitions Unified Role Definition Assigned Principals",
					"action": "Invoke function assignedPrincipals",
					"description": "Invoke function assignedPrincipals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Transitive",
			"name": "transitive",
			"description": "Usage: transitive=@transitive",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "transitive",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope Type",
			"name": "directoryScopeType",
			"description": "Usage: directoryScopeType='@directoryScopeType'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope ID",
			"name": "directoryScopeId",
			"description": "Usage: directoryScopeId='@directoryScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Transitive",
			"name": "transitive",
			"description": "Usage: transitive=@transitive",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "transitive",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope Type",
			"name": "directoryScopeType",
			"description": "Usage: directoryScopeType='@directoryScopeType'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope ID",
			"name": "directoryScopeId",
			"description": "Usage: directoryScopeId='@directoryScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Transitive",
			"name": "transitive",
			"description": "Usage: transitive=@transitive",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "transitive",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope Type",
			"name": "directoryScopeType",
			"description": "Usage: directoryScopeType='@directoryScopeType'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope ID",
			"name": "directoryScopeId",
			"description": "Usage: directoryScopeId='@directoryScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Transitive",
			"name": "transitive",
			"description": "Usage: transitive=@transitive",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "transitive",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope Type",
			"name": "directoryScopeType",
			"description": "Usage: directoryScopeType='@directoryScopeType'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope ID",
			"name": "directoryScopeId",
			"description": "Usage: directoryScopeId='@directoryScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Device Management Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/microsoft.graph.roleScheduleInstances(directoryScopeId='@directoryScopeId',appScopeId='@appScopeId',principalId='@principalId',roleDefinitionId='@roleDefinitionId')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope ID",
			"name": "directoryScopeId",
			"description": "Usage: directoryScopeId='@directoryScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "App Scope ID",
			"name": "appScopeId",
			"description": "Usage: appScopeId='@appScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "appScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Principal ID",
			"name": "principalId",
			"description": "Usage: principalId='@principalId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "principalId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Role Definition ID",
			"name": "roleDefinitionId",
			"description": "Usage: roleDefinitionId='@roleDefinitionId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "roleDefinitionId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedule Instances"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedule Instances"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedule Instances"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedule Instances"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedule Instances"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedule Instances"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedule Instances"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/microsoft.graph.roleSchedules(directoryScopeId='@directoryScopeId',appScopeId='@appScopeId',principalId='@principalId',roleDefinitionId='@roleDefinitionId')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedules"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope ID",
			"name": "directoryScopeId",
			"description": "Usage: directoryScopeId='@directoryScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedules"
					]
				}
			}
		},
		{
			"displayName": "App Scope ID",
			"name": "appScopeId",
			"description": "Usage: appScopeId='@appScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "appScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedules"
					]
				}
			}
		},
		{
			"displayName": "Principal ID",
			"name": "principalId",
			"description": "Usage: principalId='@principalId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "principalId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedules"
					]
				}
			}
		},
		{
			"displayName": "Role Definition ID",
			"name": "roleDefinitionId",
			"description": "Usage: roleDefinitionId='@roleDefinitionId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "roleDefinitionId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedules"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedules"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedules"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedules"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedules"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedules"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedules"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Schedules"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentApprovals/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "target",
			"type": "options",
			"options": [
				{
					"name": "Target",
					"value": "target"
				},
				{
					"name": "Created By",
					"value": "createdBy"
				},
				{
					"name": "Approver",
					"value": "approver"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Approvals Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentScheduleInstances/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentScheduleRequests/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Created By",
					"value": "createdBy"
				},
				{
					"name": "Approver",
					"value": "approver"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleAssignmentSchedules/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedules Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedules Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Transitive",
			"name": "transitive",
			"description": "Usage: transitive=@transitive",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "transitive",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope Type",
			"name": "directoryScopeType",
			"description": "Usage: directoryScopeType='@directoryScopeType'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope ID",
			"name": "directoryScopeId",
			"description": "Usage: directoryScopeId='@directoryScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Transitive",
			"name": "transitive",
			"description": "Usage: transitive=@transitive",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "transitive",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope Type",
			"name": "directoryScopeType",
			"description": "Usage: directoryScopeType='@directoryScopeType'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope ID",
			"name": "directoryScopeId",
			"description": "Usage: directoryScopeId='@directoryScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleEligibilityScheduleInstances/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleEligibilityScheduleRequests/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Created By",
					"value": "createdBy"
				},
				{
					"name": "Approver",
					"value": "approver"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/directory/roleEligibilitySchedules/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedules Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedules Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/microsoft.graph.roleScheduleInstances(directoryScopeId='@directoryScopeId',appScopeId='@appScopeId',principalId='@principalId',roleDefinitionId='@roleDefinitionId')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope ID",
			"name": "directoryScopeId",
			"description": "Usage: directoryScopeId='@directoryScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "App Scope ID",
			"name": "appScopeId",
			"description": "Usage: appScopeId='@appScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "appScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Principal ID",
			"name": "principalId",
			"description": "Usage: principalId='@principalId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "principalId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Role Definition ID",
			"name": "roleDefinitionId",
			"description": "Usage: roleDefinitionId='@roleDefinitionId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "roleDefinitionId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedule Instances"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedule Instances"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedule Instances"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedule Instances"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedule Instances"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedule Instances"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedule Instances"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/microsoft.graph.roleSchedules(directoryScopeId='@directoryScopeId',appScopeId='@appScopeId',principalId='@principalId',roleDefinitionId='@roleDefinitionId')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedules"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope ID",
			"name": "directoryScopeId",
			"description": "Usage: directoryScopeId='@directoryScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedules"
					]
				}
			}
		},
		{
			"displayName": "App Scope ID",
			"name": "appScopeId",
			"description": "Usage: appScopeId='@appScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "appScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedules"
					]
				}
			}
		},
		{
			"displayName": "Principal ID",
			"name": "principalId",
			"description": "Usage: principalId='@principalId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "principalId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedules"
					]
				}
			}
		},
		{
			"displayName": "Role Definition ID",
			"name": "roleDefinitionId",
			"description": "Usage: roleDefinitionId='@roleDefinitionId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "roleDefinitionId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedules"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedules"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedules"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedules"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedules"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedules"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedules"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Schedules"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentApprovals/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "target",
			"type": "options",
			"options": [
				{
					"name": "Target",
					"value": "target"
				},
				{
					"name": "Created By",
					"value": "createdBy"
				},
				{
					"name": "Approver",
					"value": "approver"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Approvals Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Created By",
					"value": "createdBy"
				},
				{
					"name": "Approver",
					"value": "approver"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleAssignmentSchedules/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedules Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedules Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Transitive",
			"name": "transitive",
			"description": "Usage: transitive=@transitive",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "transitive",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope Type",
			"name": "directoryScopeType",
			"description": "Usage: directoryScopeType='@directoryScopeType'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope ID",
			"name": "directoryScopeId",
			"description": "Usage: directoryScopeId='@directoryScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Transitive",
			"name": "transitive",
			"description": "Usage: transitive=@transitive",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "transitive",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope Type",
			"name": "directoryScopeType",
			"description": "Usage: directoryScopeType='@directoryScopeType'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope ID",
			"name": "directoryScopeId",
			"description": "Usage: directoryScopeId='@directoryScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleEligibilityScheduleInstances/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Instances Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Created By",
					"value": "createdBy"
				},
				{
					"name": "Approver",
					"value": "approver"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/entitlementManagement/roleEligibilitySchedules/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedules Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "principal",
			"type": "options",
			"options": [
				{
					"name": "Principal",
					"value": "principal"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedules Filter By Current User"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedules Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Transitive",
			"name": "transitive",
			"description": "Usage: transitive=@transitive",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "transitive",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope Type",
			"name": "directoryScopeType",
			"description": "Usage: directoryScopeType='@directoryScopeType'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope ID",
			"name": "directoryScopeId",
			"description": "Usage: directoryScopeId='@directoryScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Inherits Permissions From Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/microsoft.graph.assignedPrincipals(transitive=@transitive,directoryScopeType='@directoryScopeType',directoryScopeId='@directoryScopeId')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Transitive",
			"name": "transitive",
			"description": "Usage: transitive=@transitive",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "transitive",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope Type",
			"name": "directoryScopeType",
			"description": "Usage: directoryScopeType='@directoryScopeType'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
		{
			"displayName": "Directory Scope ID",
			"name": "directoryScopeId",
			"description": "Usage: directoryScopeId='@directoryScopeId'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "directoryScopeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Assigned Principals"
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
						"Role Management Functions"
					],
					"operation": [
						"Role Management Exchange Role Definitions Unified Role Definition Assigned Principals"
					]
				}
			}
		},
];
