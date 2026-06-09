import type { INodeProperties } from 'n8n-workflow';

export const roleManagementUnifiedRbacApplicationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					]
				}
			},
			"options": [
				{
					"name": "Role Management Delete Exchange",
					"value": "Role Management Delete Exchange",
					"action": "Delete navigation property exchange for roleManagement",
					"description": "Delete navigation property exchange for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/exchange"
						}
					}
				},
				{
					"name": "Role Management Get Exchange",
					"value": "Role Management Get Exchange",
					"action": "Get exchange from roleManagement",
					"description": "Get exchange from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange"
						}
					}
				},
				{
					"name": "Role Management Update Exchange",
					"value": "Role Management Update Exchange",
					"action": "Update the navigation property exchange in roleManagement",
					"description": "Update the navigation property exchange in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/exchange"
						}
					}
				},
				{
					"name": "Role Management Exchange List Resource Namespaces",
					"value": "Role Management Exchange List Resource Namespaces",
					"action": "Get resourceNamespaces from roleManagement",
					"description": "Get resourceNamespaces from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/resourceNamespaces"
						}
					}
				},
				{
					"name": "Role Management Exchange Create Resource Namespaces",
					"value": "Role Management Exchange Create Resource Namespaces",
					"action": "Create new navigation property to resourceNamespaces for roleManagement",
					"description": "Create new navigation property to resourceNamespaces for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/exchange/resourceNamespaces"
						}
					}
				},
				{
					"name": "Role Management Exchange Delete Resource Namespaces",
					"value": "Role Management Exchange Delete Resource Namespaces",
					"action": "Delete navigation property resourceNamespaces for roleManagement",
					"description": "Delete navigation property resourceNamespaces for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/exchange/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Get Resource Namespaces",
					"value": "Role Management Exchange Get Resource Namespaces",
					"action": "Get resourceNamespaces from roleManagement",
					"description": "Get resourceNamespaces from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Update Resource Namespaces",
					"value": "Role Management Exchange Update Resource Namespaces",
					"action": "Update the navigation property resourceNamespaces in roleManagement",
					"description": "Update the navigation property resourceNamespaces in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/exchange/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Resource Namespaces List Resource Actions",
					"value": "Role Management Exchange Resource Namespaces List Resource Actions",
					"action": "List resourceActions",
					"description": "Get a list of the unifiedRbacResourceAction objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions"
						}
					}
				},
				{
					"name": "Role Management Exchange Resource Namespaces Create Resource Actions",
					"value": "Role Management Exchange Resource Namespaces Create Resource Actions",
					"action": "Create new navigation property to resourceActions for roleManagement",
					"description": "Create new navigation property to resourceActions for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/exchange/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions"
						}
					}
				},
				{
					"name": "Role Management Exchange Resource Namespaces Delete Resource Actions",
					"value": "Role Management Exchange Resource Namespaces Delete Resource Actions",
					"action": "Delete navigation property resourceActions for roleManagement",
					"description": "Delete navigation property resourceActions for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/exchange/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Resource Namespaces Get Resource Actions",
					"value": "Role Management Exchange Resource Namespaces Get Resource Actions",
					"action": "Get resourceActions from roleManagement",
					"description": "Operations that an authorized principal are allowed to perform.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Resource Namespaces Update Resource Actions",
					"value": "Role Management Exchange Resource Namespaces Update Resource Actions",
					"action": "Update the navigation property resourceActions in roleManagement",
					"description": "Update the navigation property resourceActions in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/exchange/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Resource Namespaces Resource Actions Delete Resource Scope",
					"value": "Role Management Exchange Resource Namespaces Resource Actions Delete Resource Scope",
					"action": "Delete navigation property resourceScope for roleManagement",
					"description": "Delete navigation property resourceScope for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/exchange/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}/resourceScope"
						}
					}
				},
				{
					"name": "Role Management Exchange Resource Namespaces Resource Actions Get Resource Scope",
					"value": "Role Management Exchange Resource Namespaces Resource Actions Get Resource Scope",
					"action": "Get resourceScope from roleManagement",
					"description": "Get resourceScope from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}/resourceScope"
						}
					}
				},
				{
					"name": "Role Management Exchange Resource Namespaces Resource Actions Update Resource Scope",
					"value": "Role Management Exchange Resource Namespaces Resource Actions Update Resource Scope",
					"action": "Update the navigation property resourceScope in roleManagement",
					"description": "Update the navigation property resourceScope in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/exchange/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}/resourceScope"
						}
					}
				},
				{
					"name": "Role Management Exchange List Role Assignments",
					"value": "Role Management Exchange List Role Assignments",
					"action": "Get roleAssignments from roleManagement",
					"description": "Get roleAssignments from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/roleAssignments"
						}
					}
				},
				{
					"name": "Role Management Exchange Create Role Assignments",
					"value": "Role Management Exchange Create Role Assignments",
					"action": "Create new navigation property to roleAssignments for roleManagement",
					"description": "Create new navigation property to roleAssignments for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/exchange/roleAssignments"
						}
					}
				},
				{
					"name": "Role Management Exchange Delete Role Assignments",
					"value": "Role Management Exchange Delete Role Assignments",
					"action": "Delete navigation property roleAssignments for roleManagement",
					"description": "Delete navigation property roleAssignments for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/exchange/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Get Role Assignments",
					"value": "Role Management Exchange Get Role Assignments",
					"action": "Get roleAssignments from roleManagement",
					"description": "Get roleAssignments from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Update Role Assignments",
					"value": "Role Management Exchange Update Role Assignments",
					"action": "Update the navigation property roleAssignments in roleManagement",
					"description": "Update the navigation property roleAssignments in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/exchange/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Role Assignments Delete App Scope",
					"value": "Role Management Exchange Role Assignments Delete App Scope",
					"action": "Delete navigation property appScope for roleManagement",
					"description": "Delete navigation property appScope for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/exchange/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Exchange Role Assignments Get App Scope",
					"value": "Role Management Exchange Role Assignments Get App Scope",
					"action": "Get appScope from roleManagement",
					"description": "Details of the app specific scope when the assignment scope is app specific. Containment entity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Exchange Role Assignments Update App Scope",
					"value": "Role Management Exchange Role Assignments Update App Scope",
					"action": "Update the navigation property appScope in roleManagement",
					"description": "Update the navigation property appScope in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/exchange/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Exchange Role Assignments Get Directory Scope",
					"value": "Role Management Exchange Role Assignments Get Directory Scope",
					"action": "Get directoryScope from roleManagement",
					"description": "The directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/directoryScope"
						}
					}
				},
				{
					"name": "Role Management Exchange Role Assignments Get Principal",
					"value": "Role Management Exchange Role Assignments Get Principal",
					"action": "Get principal from roleManagement",
					"description": "The assigned principal. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/principal"
						}
					}
				},
				{
					"name": "Role Management Exchange Role Assignments Get Role Definition",
					"value": "Role Management Exchange Role Assignments Get Role Definition",
					"action": "Get roleDefinition from roleManagement",
					"description": "The roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.id will be auto expanded. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/roleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Role Management Exchange List Role Definitions",
					"value": "Role Management Exchange List Role Definitions",
					"action": "Get roleDefinitions from roleManagement",
					"description": "Get roleDefinitions from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/roleDefinitions"
						}
					}
				},
				{
					"name": "Role Management Exchange Create Role Definitions",
					"value": "Role Management Exchange Create Role Definitions",
					"action": "Create new navigation property to roleDefinitions for roleManagement",
					"description": "Create new navigation property to roleDefinitions for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/exchange/roleDefinitions"
						}
					}
				},
				{
					"name": "Role Management Exchange Delete Role Definitions",
					"value": "Role Management Exchange Delete Role Definitions",
					"action": "Delete navigation property roleDefinitions for roleManagement",
					"description": "Delete navigation property roleDefinitions for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/exchange/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Get Role Definitions",
					"value": "Role Management Exchange Get Role Definitions",
					"action": "Get roleDefinitions from roleManagement",
					"description": "Get roleDefinitions from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Update Role Definitions",
					"value": "Role Management Exchange Update Role Definitions",
					"action": "Update the navigation property roleDefinitions in roleManagement",
					"description": "Update the navigation property roleDefinitions in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/exchange/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Role Definitions List Inherits Permissions From",
					"value": "Role Management Exchange Role Definitions List Inherits Permissions From",
					"action": "Get inheritsPermissionsFrom from roleManagement",
					"description": "Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom"
						}
					}
				},
				{
					"name": "Role Management Exchange Role Definitions Create Inherits Permissions From",
					"value": "Role Management Exchange Role Definitions Create Inherits Permissions From",
					"action": "Create new navigation property to inheritsPermissionsFrom for roleManagement",
					"description": "Create new navigation property to inheritsPermissionsFrom for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/exchange/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom"
						}
					}
				},
				{
					"name": "Role Management Exchange Role Definitions Delete Inherits Permissions From",
					"value": "Role Management Exchange Role Definitions Delete Inherits Permissions From",
					"action": "Delete navigation property inheritsPermissionsFrom for roleManagement",
					"description": "Delete navigation property inheritsPermissionsFrom for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/exchange/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Role Definitions Get Inherits Permissions From",
					"value": "Role Management Exchange Role Definitions Get Inherits Permissions From",
					"action": "Get inheritsPermissionsFrom from roleManagement",
					"description": "Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Role Definitions Update Inherits Permissions From",
					"value": "Role Management Exchange Role Definitions Update Inherits Permissions From",
					"action": "Update the navigation property inheritsPermissionsFrom in roleManagement",
					"description": "Update the navigation property inheritsPermissionsFrom in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/exchange/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange List Transitive Role Assignments",
					"value": "Role Management Exchange List Transitive Role Assignments",
					"action": "Get transitiveRoleAssignments from roleManagement",
					"description": "Get transitiveRoleAssignments from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/transitiveRoleAssignments"
						}
					}
				},
				{
					"name": "Role Management Exchange Create Transitive Role Assignments",
					"value": "Role Management Exchange Create Transitive Role Assignments",
					"action": "Create new navigation property to transitiveRoleAssignments for roleManagement",
					"description": "Create new navigation property to transitiveRoleAssignments for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/exchange/transitiveRoleAssignments"
						}
					}
				},
				{
					"name": "Role Management Exchange Delete Transitive Role Assignments",
					"value": "Role Management Exchange Delete Transitive Role Assignments",
					"action": "Delete navigation property transitiveRoleAssignments for roleManagement",
					"description": "Delete navigation property transitiveRoleAssignments for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/exchange/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Get Transitive Role Assignments",
					"value": "Role Management Exchange Get Transitive Role Assignments",
					"action": "Get transitiveRoleAssignments from roleManagement",
					"description": "Get transitiveRoleAssignments from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Update Transitive Role Assignments",
					"value": "Role Management Exchange Update Transitive Role Assignments",
					"action": "Update the navigation property transitiveRoleAssignments in roleManagement",
					"description": "Update the navigation property transitiveRoleAssignments in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/exchange/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Exchange Transitive Role Assignments Delete App Scope",
					"value": "Role Management Exchange Transitive Role Assignments Delete App Scope",
					"action": "Delete navigation property appScope for roleManagement",
					"description": "Delete navigation property appScope for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/exchange/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Exchange Transitive Role Assignments Get App Scope",
					"value": "Role Management Exchange Transitive Role Assignments Get App Scope",
					"action": "Get appScope from roleManagement",
					"description": "Details of the app specific scope when the assignment scope is app specific. Containment entity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Exchange Transitive Role Assignments Update App Scope",
					"value": "Role Management Exchange Transitive Role Assignments Update App Scope",
					"action": "Update the navigation property appScope in roleManagement",
					"description": "Update the navigation property appScope in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/exchange/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/appScope"
						}
					}
				},
				{
					"name": "Role Management Exchange Transitive Role Assignments Get Directory Scope",
					"value": "Role Management Exchange Transitive Role Assignments Get Directory Scope",
					"action": "Get directoryScope from roleManagement",
					"description": "The directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/directoryScope"
						}
					}
				},
				{
					"name": "Role Management Exchange Transitive Role Assignments Get Principal",
					"value": "Role Management Exchange Transitive Role Assignments Get Principal",
					"action": "Get principal from roleManagement",
					"description": "The assigned principal. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/principal"
						}
					}
				},
				{
					"name": "Role Management Exchange Transitive Role Assignments Get Role Definition",
					"value": "Role Management Exchange Transitive Role Assignments Get Role Definition",
					"action": "Get roleDefinition from roleManagement",
					"description": "The roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.id will be auto expanded. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/exchange/transitiveRoleAssignments/{{$parameter[\"unifiedRoleAssignment-id\"]}}/roleDefinition"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /roleManagement/exchange",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Delete Exchange"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Delete Exchange"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Get Exchange"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Get Exchange"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Get Exchange"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Update Exchange"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Update Exchange"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/resourceNamespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Resource Namespaces"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Resource Namespaces"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Resource Namespaces"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Resource Namespaces"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Resource Namespaces"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Resource Namespaces"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Resource Namespaces"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Resource Namespaces"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/exchange/resourceNamespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Create Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/exchange/resourceNamespaces<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Create Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Delete Resource Namespaces"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Delete Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Get Resource Namespaces"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Get Resource Namespaces"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Get Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Update Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Update Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces List Resource Actions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces List Resource Actions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces List Resource Actions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces List Resource Actions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces List Resource Actions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces List Resource Actions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces List Resource Actions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces List Resource Actions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces List Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Create Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Create Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Delete Resource Actions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Delete Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Get Resource Actions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Get Resource Actions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Get Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Update Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Update Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Resource Actions Delete Resource Scope"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Resource Actions Delete Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Resource Actions Get Resource Scope"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Resource Actions Get Resource Scope"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Resource Actions Get Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Resource Actions Update Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Resource Actions Update Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/exchange/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/exchange/roleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Delete Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Delete Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Get Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Get Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Get Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Delete App Scope"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Delete App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Get App Scope"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Get App Scope"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Get App Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Update App Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}/appScope<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Update App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}/directoryScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Get Directory Scope"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Get Directory Scope"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Get Directory Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Get Principal"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Get Principal"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Get Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Get Role Definition"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Get Role Definition"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Assignments Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Definitions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Definitions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Definitions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Definitions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Definitions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Definitions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Definitions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Definitions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/exchange/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/exchange/roleDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Delete Role Definitions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Delete Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Get Role Definitions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Get Role Definitions"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Get Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions List Inherits Permissions From"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions List Inherits Permissions From"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions List Inherits Permissions From"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions List Inherits Permissions From"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions List Inherits Permissions From"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions List Inherits Permissions From"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions List Inherits Permissions From"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions List Inherits Permissions From"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions List Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions Create Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions Create Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions Delete Inherits Permissions From"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions Delete Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions Get Inherits Permissions From"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions Get Inherits Permissions From"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions Get Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions Update Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Role Definitions Update Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/transitiveRoleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Transitive Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Transitive Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Transitive Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Transitive Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Transitive Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Transitive Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Transitive Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Transitive Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange List Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/exchange/transitiveRoleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Create Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/exchange/transitiveRoleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Create Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Delete Transitive Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Delete Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Get Transitive Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Get Transitive Role Assignments"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Get Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Update Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Update Transitive Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Delete App Scope"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Delete App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Get App Scope"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Get App Scope"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Get App Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Update App Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Update App Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/directoryScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Get Directory Scope"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Get Directory Scope"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Get Directory Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Get Principal"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Get Principal"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Get Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Get Role Definition"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Get Role Definition"
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
						"Role Management Unified Rbac Application"
					],
					"operation": [
						"Role Management Exchange Transitive Role Assignments Get Role Definition"
					]
				}
			}
		},
];
