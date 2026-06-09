import type { INodeProperties } from 'n8n-workflow';

export const roleManagementRbacApplicationMultipleDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					]
				}
			},
			"options": [
				{
					"name": "Role Management Delete Cloud PC",
					"value": "Role Management Delete Cloud PC",
					"action": "Delete navigation property cloudPC for roleManagement",
					"description": "Delete navigation property cloudPC for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/cloudPC"
						}
					}
				},
				{
					"name": "Role Management Get Cloud PC",
					"value": "Role Management Get Cloud PC",
					"action": "Get cloudPC from roleManagement",
					"description": "Get cloudPC from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC"
						}
					}
				},
				{
					"name": "Role Management Update Cloud PC",
					"value": "Role Management Update Cloud PC",
					"action": "Update the navigation property cloudPC in roleManagement",
					"description": "Update the navigation property cloudPC in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/cloudPC"
						}
					}
				},
				{
					"name": "Role Management Cloud PC List Resource Namespaces",
					"value": "Role Management Cloud PC List Resource Namespaces",
					"action": "Get resourceNamespaces from roleManagement",
					"description": "Get resourceNamespaces from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/resourceNamespaces"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Create Resource Namespaces",
					"value": "Role Management Cloud PC Create Resource Namespaces",
					"action": "Create new navigation property to resourceNamespaces for roleManagement",
					"description": "Create new navigation property to resourceNamespaces for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/cloudPC/resourceNamespaces"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Delete Resource Namespaces",
					"value": "Role Management Cloud PC Delete Resource Namespaces",
					"action": "Delete navigation property resourceNamespaces for roleManagement",
					"description": "Delete navigation property resourceNamespaces for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/cloudPC/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Get Resource Namespaces",
					"value": "Role Management Cloud PC Get Resource Namespaces",
					"action": "Get resourceNamespaces from roleManagement",
					"description": "Get resourceNamespaces from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Update Resource Namespaces",
					"value": "Role Management Cloud PC Update Resource Namespaces",
					"action": "Update the navigation property resourceNamespaces in roleManagement",
					"description": "Update the navigation property resourceNamespaces in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/cloudPC/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Resource Namespaces List Resource Actions",
					"value": "Role Management Cloud PC Resource Namespaces List Resource Actions",
					"action": "List resourceActions",
					"description": "Get a list of the unifiedRbacResourceAction objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Resource Namespaces Create Resource Actions",
					"value": "Role Management Cloud PC Resource Namespaces Create Resource Actions",
					"action": "Create new navigation property to resourceActions for roleManagement",
					"description": "Create new navigation property to resourceActions for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/cloudPC/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Resource Namespaces Delete Resource Actions",
					"value": "Role Management Cloud PC Resource Namespaces Delete Resource Actions",
					"action": "Delete navigation property resourceActions for roleManagement",
					"description": "Delete navigation property resourceActions for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/cloudPC/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Resource Namespaces Get Resource Actions",
					"value": "Role Management Cloud PC Resource Namespaces Get Resource Actions",
					"action": "Get resourceActions from roleManagement",
					"description": "Operations that an authorized principal are allowed to perform.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Resource Namespaces Update Resource Actions",
					"value": "Role Management Cloud PC Resource Namespaces Update Resource Actions",
					"action": "Update the navigation property resourceActions in roleManagement",
					"description": "Update the navigation property resourceActions in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/cloudPC/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Resource Namespaces Resource Actions Delete Resource Scope",
					"value": "Role Management Cloud PC Resource Namespaces Resource Actions Delete Resource Scope",
					"action": "Delete navigation property resourceScope for roleManagement",
					"description": "Delete navigation property resourceScope for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/cloudPC/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}/resourceScope"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Resource Namespaces Resource Actions Get Resource Scope",
					"value": "Role Management Cloud PC Resource Namespaces Resource Actions Get Resource Scope",
					"action": "Get resourceScope from roleManagement",
					"description": "Get resourceScope from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}/resourceScope"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Resource Namespaces Resource Actions Update Resource Scope",
					"value": "Role Management Cloud PC Resource Namespaces Resource Actions Update Resource Scope",
					"action": "Update the navigation property resourceScope in roleManagement",
					"description": "Update the navigation property resourceScope in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/cloudPC/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}/resourceScope"
						}
					}
				},
				{
					"name": "Role Management Cloud PC List Role Assignments",
					"value": "Role Management Cloud PC List Role Assignments",
					"action": "Get unifiedRoleAssignmentMultiple",
					"description": "Get the properties and relationships of a unifiedRoleAssignmentMultiple object of an RBAC provider.  The following RBAC providers are currently supported:\n- Cloud PC \n- device management (Intune) For other Microsoft 365 applications (like Azure AD), use unifiedRoleAssignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/roleAssignments"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Create Role Assignments",
					"value": "Role Management Cloud PC Create Role Assignments",
					"action": "Create unifiedRoleAssignmentMultiple",
					"description": "Create a new unifiedRoleAssignmentMultiple object for an RBAC provider.  The following RBAC providers are currently supported:\n- Cloud PC \n- device management (Intune) For other Microsoft 365 applications (like Azure AD), use unifiedRoleAssignment.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/cloudPC/roleAssignments"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Delete Role Assignments",
					"value": "Role Management Cloud PC Delete Role Assignments",
					"action": "Delete navigation property roleAssignments for roleManagement",
					"description": "Delete navigation property roleAssignments for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/cloudPC/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Get Role Assignments",
					"value": "Role Management Cloud PC Get Role Assignments",
					"action": "Get roleAssignments from roleManagement",
					"description": "Get roleAssignments from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Update Role Assignments",
					"value": "Role Management Cloud PC Update Role Assignments",
					"action": "Update the navigation property roleAssignments in roleManagement",
					"description": "Update the navigation property roleAssignments in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/cloudPC/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Assignments List App Scopes",
					"value": "Role Management Cloud PC Role Assignments List App Scopes",
					"action": "Get appScopes from roleManagement",
					"description": "Read-only collection with details of the app specific scopes when the assignment scopes are app specific. Containment entity. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/appScopes"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Assignments Create App Scopes",
					"value": "Role Management Cloud PC Role Assignments Create App Scopes",
					"action": "Create new navigation property to appScopes for roleManagement",
					"description": "Create new navigation property to appScopes for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/cloudPC/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/appScopes"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Assignments Delete App Scopes",
					"value": "Role Management Cloud PC Role Assignments Delete App Scopes",
					"action": "Delete navigation property appScopes for roleManagement",
					"description": "Delete navigation property appScopes for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/cloudPC/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/appScopes/{{$parameter[\"appScope-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Assignments Get App Scopes",
					"value": "Role Management Cloud PC Role Assignments Get App Scopes",
					"action": "Get appScopes from roleManagement",
					"description": "Read-only collection with details of the app specific scopes when the assignment scopes are app specific. Containment entity. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/appScopes/{{$parameter[\"appScope-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Assignments Update App Scopes",
					"value": "Role Management Cloud PC Role Assignments Update App Scopes",
					"action": "Update the navigation property appScopes in roleManagement",
					"description": "Update the navigation property appScopes in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/cloudPC/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/appScopes/{{$parameter[\"appScope-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Assignments List Directory Scopes",
					"value": "Role Management Cloud PC Role Assignments List Directory Scopes",
					"action": "Get directoryScopes from roleManagement",
					"description": "Read-only collection referencing the directory objects that are scope of the assignment. Provided so that callers can get the directory objects using $expand at the same time as getting the role assignment. Read-only.  Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/directoryScopes"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Assignments Get Directory Scopes",
					"value": "Role Management Cloud PC Role Assignments Get Directory Scopes",
					"action": "Get directoryScopes from roleManagement",
					"description": "Read-only collection referencing the directory objects that are scope of the assignment. Provided so that callers can get the directory objects using $expand at the same time as getting the role assignment. Read-only.  Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/directoryScopes/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Assignments List Principals",
					"value": "Role Management Cloud PC Role Assignments List Principals",
					"action": "Get principals from roleManagement",
					"description": "Read-only collection referencing the assigned principals. Provided so that callers can get the principals using $expand at the same time as getting the role assignment. Read-only.  Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/principals"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Assignments Get Principals",
					"value": "Role Management Cloud PC Role Assignments Get Principals",
					"action": "Get principals from roleManagement",
					"description": "Read-only collection referencing the assigned principals. Provided so that callers can get the principals using $expand at the same time as getting the role assignment. Read-only.  Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/principals/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Assignments Get Role Definition",
					"value": "Role Management Cloud PC Role Assignments Get Role Definition",
					"action": "Get roleDefinition from roleManagement",
					"description": "Specifies the roleDefinition that the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment.  Supports $filter (eq operator on id, isBuiltIn, and displayName, and startsWith operator on displayName)  and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Role Management Cloud PC List Role Definitions",
					"value": "Role Management Cloud PC List Role Definitions",
					"action": "List roleDefinitions",
					"description": "Get a list of unifiedRoleDefinition objects for an RBAC provider. The following RBAC providers are currently supported:\n- Cloud PC \n- device management (Intune)\n- directory (Azure AD) \n- entitlement management (Azure AD)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/roleDefinitions"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Create Role Definitions",
					"value": "Role Management Cloud PC Create Role Definitions",
					"action": "Create roleDefinitions",
					"description": "Create a new unifiedRoleDefinition object for an RBAC provider. This feature requires an Azure AD Premium P1 or P2 license. The following RBAC providers are currently supported:\n- Cloud PC\n- device management (Intune)\n- directory (Azure AD)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/cloudPC/roleDefinitions"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Delete Role Definitions",
					"value": "Role Management Cloud PC Delete Role Definitions",
					"action": "Delete navigation property roleDefinitions for roleManagement",
					"description": "Delete navigation property roleDefinitions for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/cloudPC/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Get Role Definitions",
					"value": "Role Management Cloud PC Get Role Definitions",
					"action": "Get roleDefinitions from roleManagement",
					"description": "Get roleDefinitions from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Update Role Definitions",
					"value": "Role Management Cloud PC Update Role Definitions",
					"action": "Update the navigation property roleDefinitions in roleManagement",
					"description": "Update the navigation property roleDefinitions in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/cloudPC/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Definitions List Inherits Permissions From",
					"value": "Role Management Cloud PC Role Definitions List Inherits Permissions From",
					"action": "Get inheritsPermissionsFrom from roleManagement",
					"description": "Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Definitions Create Inherits Permissions From",
					"value": "Role Management Cloud PC Role Definitions Create Inherits Permissions From",
					"action": "Create new navigation property to inheritsPermissionsFrom for roleManagement",
					"description": "Create new navigation property to inheritsPermissionsFrom for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/cloudPC/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Definitions Delete Inherits Permissions From",
					"value": "Role Management Cloud PC Role Definitions Delete Inherits Permissions From",
					"action": "Delete navigation property inheritsPermissionsFrom for roleManagement",
					"description": "Delete navigation property inheritsPermissionsFrom for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/cloudPC/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Definitions Get Inherits Permissions From",
					"value": "Role Management Cloud PC Role Definitions Get Inherits Permissions From",
					"action": "Get inheritsPermissionsFrom from roleManagement",
					"description": "Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/cloudPC/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}"
						}
					}
				},
				{
					"name": "Role Management Cloud PC Role Definitions Update Inherits Permissions From",
					"value": "Role Management Cloud PC Role Definitions Update Inherits Permissions From",
					"action": "Update the navigation property inheritsPermissionsFrom in roleManagement",
					"description": "Update the navigation property inheritsPermissionsFrom in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/cloudPC/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}"
						}
					}
				},
				{
					"name": "Role Management Delete Device Management",
					"value": "Role Management Delete Device Management",
					"action": "Delete navigation property deviceManagement for roleManagement",
					"description": "Delete navigation property deviceManagement for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/deviceManagement"
						}
					}
				},
				{
					"name": "Role Management Get Device Management",
					"value": "Role Management Get Device Management",
					"action": "Get deviceManagement from roleManagement",
					"description": "The RbacApplication for Device Management",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement"
						}
					}
				},
				{
					"name": "Role Management Update Device Management",
					"value": "Role Management Update Device Management",
					"action": "Update the navigation property deviceManagement in roleManagement",
					"description": "Update the navigation property deviceManagement in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/deviceManagement"
						}
					}
				},
				{
					"name": "Role Management Device Management List Resource Namespaces",
					"value": "Role Management Device Management List Resource Namespaces",
					"action": "Get resourceNamespaces from roleManagement",
					"description": "Get resourceNamespaces from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/resourceNamespaces"
						}
					}
				},
				{
					"name": "Role Management Device Management Create Resource Namespaces",
					"value": "Role Management Device Management Create Resource Namespaces",
					"action": "Create new navigation property to resourceNamespaces for roleManagement",
					"description": "Create new navigation property to resourceNamespaces for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/deviceManagement/resourceNamespaces"
						}
					}
				},
				{
					"name": "Role Management Device Management Delete Resource Namespaces",
					"value": "Role Management Device Management Delete Resource Namespaces",
					"action": "Delete navigation property resourceNamespaces for roleManagement",
					"description": "Delete navigation property resourceNamespaces for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/deviceManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Get Resource Namespaces",
					"value": "Role Management Device Management Get Resource Namespaces",
					"action": "Get resourceNamespaces from roleManagement",
					"description": "Get resourceNamespaces from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Update Resource Namespaces",
					"value": "Role Management Device Management Update Resource Namespaces",
					"action": "Update the navigation property resourceNamespaces in roleManagement",
					"description": "Update the navigation property resourceNamespaces in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/deviceManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Resource Namespaces List Resource Actions",
					"value": "Role Management Device Management Resource Namespaces List Resource Actions",
					"action": "List resourceActions",
					"description": "Get a list of the unifiedRbacResourceAction objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions"
						}
					}
				},
				{
					"name": "Role Management Device Management Resource Namespaces Create Resource Actions",
					"value": "Role Management Device Management Resource Namespaces Create Resource Actions",
					"action": "Create new navigation property to resourceActions for roleManagement",
					"description": "Create new navigation property to resourceActions for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/deviceManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions"
						}
					}
				},
				{
					"name": "Role Management Device Management Resource Namespaces Delete Resource Actions",
					"value": "Role Management Device Management Resource Namespaces Delete Resource Actions",
					"action": "Delete navigation property resourceActions for roleManagement",
					"description": "Delete navigation property resourceActions for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/deviceManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Resource Namespaces Get Resource Actions",
					"value": "Role Management Device Management Resource Namespaces Get Resource Actions",
					"action": "Get resourceActions from roleManagement",
					"description": "Operations that an authorized principal are allowed to perform.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Resource Namespaces Update Resource Actions",
					"value": "Role Management Device Management Resource Namespaces Update Resource Actions",
					"action": "Update the navigation property resourceActions in roleManagement",
					"description": "Update the navigation property resourceActions in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/deviceManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Resource Namespaces Resource Actions Delete Resource Scope",
					"value": "Role Management Device Management Resource Namespaces Resource Actions Delete Resource Scope",
					"action": "Delete navigation property resourceScope for roleManagement",
					"description": "Delete navigation property resourceScope for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/deviceManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}/resourceScope"
						}
					}
				},
				{
					"name": "Role Management Device Management Resource Namespaces Resource Actions Get Resource Scope",
					"value": "Role Management Device Management Resource Namespaces Resource Actions Get Resource Scope",
					"action": "Get resourceScope from roleManagement",
					"description": "Get resourceScope from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}/resourceScope"
						}
					}
				},
				{
					"name": "Role Management Device Management Resource Namespaces Resource Actions Update Resource Scope",
					"value": "Role Management Device Management Resource Namespaces Resource Actions Update Resource Scope",
					"action": "Update the navigation property resourceScope in roleManagement",
					"description": "Update the navigation property resourceScope in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/deviceManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/resourceActions/{{$parameter[\"unifiedRbacResourceAction-id\"]}}/resourceScope"
						}
					}
				},
				{
					"name": "Role Management Device Management List Role Assignments",
					"value": "Role Management Device Management List Role Assignments",
					"action": "Get unifiedRoleAssignmentMultiple",
					"description": "Get the properties and relationships of a unifiedRoleAssignmentMultiple object of an RBAC provider.  The following RBAC providers are currently supported:\n- Cloud PC \n- device management (Intune) For other Microsoft 365 applications (like Azure AD), use unifiedRoleAssignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/roleAssignments"
						}
					}
				},
				{
					"name": "Role Management Device Management Create Role Assignments",
					"value": "Role Management Device Management Create Role Assignments",
					"action": "Create unifiedRoleAssignmentMultiple",
					"description": "Create a new unifiedRoleAssignmentMultiple object for an RBAC provider.  The following RBAC providers are currently supported:\n- Cloud PC \n- device management (Intune) For other Microsoft 365 applications (like Azure AD), use unifiedRoleAssignment.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/deviceManagement/roleAssignments"
						}
					}
				},
				{
					"name": "Role Management Device Management Delete Role Assignments",
					"value": "Role Management Device Management Delete Role Assignments",
					"action": "Delete navigation property roleAssignments for roleManagement",
					"description": "Delete navigation property roleAssignments for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/deviceManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Get Role Assignments",
					"value": "Role Management Device Management Get Role Assignments",
					"action": "Get roleAssignments from roleManagement",
					"description": "Get roleAssignments from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Update Role Assignments",
					"value": "Role Management Device Management Update Role Assignments",
					"action": "Update the navigation property roleAssignments in roleManagement",
					"description": "Update the navigation property roleAssignments in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/deviceManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Assignments List App Scopes",
					"value": "Role Management Device Management Role Assignments List App Scopes",
					"action": "Get appScopes from roleManagement",
					"description": "Read-only collection with details of the app specific scopes when the assignment scopes are app specific. Containment entity. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/appScopes"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Assignments Create App Scopes",
					"value": "Role Management Device Management Role Assignments Create App Scopes",
					"action": "Create new navigation property to appScopes for roleManagement",
					"description": "Create new navigation property to appScopes for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/deviceManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/appScopes"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Assignments Delete App Scopes",
					"value": "Role Management Device Management Role Assignments Delete App Scopes",
					"action": "Delete navigation property appScopes for roleManagement",
					"description": "Delete navigation property appScopes for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/deviceManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/appScopes/{{$parameter[\"appScope-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Assignments Get App Scopes",
					"value": "Role Management Device Management Role Assignments Get App Scopes",
					"action": "Get appScopes from roleManagement",
					"description": "Read-only collection with details of the app specific scopes when the assignment scopes are app specific. Containment entity. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/appScopes/{{$parameter[\"appScope-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Assignments Update App Scopes",
					"value": "Role Management Device Management Role Assignments Update App Scopes",
					"action": "Update the navigation property appScopes in roleManagement",
					"description": "Update the navigation property appScopes in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/deviceManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/appScopes/{{$parameter[\"appScope-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Assignments List Directory Scopes",
					"value": "Role Management Device Management Role Assignments List Directory Scopes",
					"action": "Get directoryScopes from roleManagement",
					"description": "Read-only collection referencing the directory objects that are scope of the assignment. Provided so that callers can get the directory objects using $expand at the same time as getting the role assignment. Read-only.  Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/directoryScopes"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Assignments Get Directory Scopes",
					"value": "Role Management Device Management Role Assignments Get Directory Scopes",
					"action": "Get directoryScopes from roleManagement",
					"description": "Read-only collection referencing the directory objects that are scope of the assignment. Provided so that callers can get the directory objects using $expand at the same time as getting the role assignment. Read-only.  Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/directoryScopes/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Assignments List Principals",
					"value": "Role Management Device Management Role Assignments List Principals",
					"action": "Get principals from roleManagement",
					"description": "Read-only collection referencing the assigned principals. Provided so that callers can get the principals using $expand at the same time as getting the role assignment. Read-only.  Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/principals"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Assignments Get Principals",
					"value": "Role Management Device Management Role Assignments Get Principals",
					"action": "Get principals from roleManagement",
					"description": "Read-only collection referencing the assigned principals. Provided so that callers can get the principals using $expand at the same time as getting the role assignment. Read-only.  Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/principals/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Assignments Get Role Definition",
					"value": "Role Management Device Management Role Assignments Get Role Definition",
					"action": "Get roleDefinition from roleManagement",
					"description": "Specifies the roleDefinition that the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment.  Supports $filter (eq operator on id, isBuiltIn, and displayName, and startsWith operator on displayName)  and $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/roleAssignments/{{$parameter[\"unifiedRoleAssignmentMultiple-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Role Management Device Management List Role Definitions",
					"value": "Role Management Device Management List Role Definitions",
					"action": "List roleDefinitions",
					"description": "Get a list of unifiedRoleDefinition objects for an RBAC provider. The following RBAC providers are currently supported:\n- Cloud PC \n- device management (Intune)\n- directory (Azure AD) \n- entitlement management (Azure AD)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/roleDefinitions"
						}
					}
				},
				{
					"name": "Role Management Device Management Create Role Definitions",
					"value": "Role Management Device Management Create Role Definitions",
					"action": "Create roleDefinitions",
					"description": "Create a new unifiedRoleDefinition object for an RBAC provider. This feature requires an Azure AD Premium P1 or P2 license. The following RBAC providers are currently supported:\n- Cloud PC\n- device management (Intune)\n- directory (Azure AD)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/deviceManagement/roleDefinitions"
						}
					}
				},
				{
					"name": "Role Management Device Management Delete Role Definitions",
					"value": "Role Management Device Management Delete Role Definitions",
					"action": "Delete navigation property roleDefinitions for roleManagement",
					"description": "Delete navigation property roleDefinitions for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/deviceManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Get Role Definitions",
					"value": "Role Management Device Management Get Role Definitions",
					"action": "Get roleDefinitions from roleManagement",
					"description": "Get roleDefinitions from roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Update Role Definitions",
					"value": "Role Management Device Management Update Role Definitions",
					"action": "Update the navigation property roleDefinitions in roleManagement",
					"description": "Update the navigation property roleDefinitions in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/deviceManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Definitions List Inherits Permissions From",
					"value": "Role Management Device Management Role Definitions List Inherits Permissions From",
					"action": "Get inheritsPermissionsFrom from roleManagement",
					"description": "Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Definitions Create Inherits Permissions From",
					"value": "Role Management Device Management Role Definitions Create Inherits Permissions From",
					"action": "Create new navigation property to inheritsPermissionsFrom for roleManagement",
					"description": "Create new navigation property to inheritsPermissionsFrom for roleManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/deviceManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Definitions Delete Inherits Permissions From",
					"value": "Role Management Device Management Role Definitions Delete Inherits Permissions From",
					"action": "Delete navigation property inheritsPermissionsFrom for roleManagement",
					"description": "Delete navigation property inheritsPermissionsFrom for roleManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roleManagement/deviceManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Definitions Get Inherits Permissions From",
					"value": "Role Management Device Management Role Definitions Get Inherits Permissions From",
					"action": "Get inheritsPermissionsFrom from roleManagement",
					"description": "Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles support this attribute.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement/deviceManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}"
						}
					}
				},
				{
					"name": "Role Management Device Management Role Definitions Update Inherits Permissions From",
					"value": "Role Management Device Management Role Definitions Update Inherits Permissions From",
					"action": "Update the navigation property inheritsPermissionsFrom in roleManagement",
					"description": "Update the navigation property inheritsPermissionsFrom in roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement/deviceManagement/roleDefinitions/{{$parameter[\"unifiedRoleDefinition-id\"]}}/inheritsPermissionsFrom/{{$parameter[\"unifiedRoleDefinition-id1\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /roleManagement/cloudPC",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Delete Cloud PC"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Delete Cloud PC"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Get Cloud PC"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Get Cloud PC"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Get Cloud PC"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Update Cloud PC"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Update Cloud PC"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/resourceNamespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/cloudPC/resourceNamespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Create Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/cloudPC/resourceNamespaces<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Create Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Delete Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Delete Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Get Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Get Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Get Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Update Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Update Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces List Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Create Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Create Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Delete Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Delete Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Get Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Get Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Get Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Update Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Update Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Resource Actions Delete Resource Scope"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Resource Actions Delete Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Resource Actions Get Resource Scope"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Resource Actions Get Resource Scope"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Resource Actions Get Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Resource Actions Update Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Resource Actions Update Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/cloudPC/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/cloudPC/roleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Delete Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Delete Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Get Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Get Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Get Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List App Scopes"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Create App Scopes"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Create App Scopes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Delete App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Delete App Scopes"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Get App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Get App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Get App Scopes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Update App Scopes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Update App Scopes"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Directory Scopes"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Get Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Get Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Get Directory Scopes"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments List Principals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Get Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Get Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Get Principals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/roleAssignments/{unifiedRoleAssignmentMultiple-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Get Role Definition"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Get Role Definition"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Assignments Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/cloudPC/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/cloudPC/roleDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Delete Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Delete Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Get Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Get Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Get Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions List Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Create Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Create Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Delete Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Delete Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Get Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Get Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Get Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Update Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Cloud PC Role Definitions Update Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/deviceManagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Delete Device Management"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Delete Device Management"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Get Device Management"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Get Device Management"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Get Device Management"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Update Device Management"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Update Device Management"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/resourceNamespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/deviceManagement/resourceNamespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Create Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/deviceManagement/resourceNamespaces<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Create Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Delete Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Delete Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Get Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Get Resource Namespaces"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Get Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Update Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Update Resource Namespaces"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces List Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces List Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Create Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Create Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Delete Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Delete Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Get Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Get Resource Actions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Get Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Update Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Update Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Resource Actions Delete Resource Scope"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Resource Actions Delete Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Resource Actions Get Resource Scope"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Resource Actions Get Resource Scope"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Resource Actions Get Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Resource Actions Update Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Resource Actions Update Resource Scope"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/deviceManagement/roleAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/deviceManagement/roleAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Create Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Delete Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Delete Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Get Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Get Role Assignments"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Get Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Update Role Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List App Scopes"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Create App Scopes"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Create App Scopes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Delete App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Delete App Scopes"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Get App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Get App Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Get App Scopes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Update App Scopes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Update App Scopes"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Directory Scopes"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Get Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Get Directory Scopes"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Get Directory Scopes"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments List Principals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Get Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Get Principals"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Get Principals"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Get Role Definition"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Get Role Definition"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Assignments Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/deviceManagement/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/deviceManagement/roleDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Delete Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Delete Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Get Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Get Role Definitions"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Get Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions List Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions List Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions Create Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions Create Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions Delete Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions Delete Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "GET /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions Get Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions Get Inherits Permissions From"
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
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions Get Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions Update Inherits Permissions From"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement/deviceManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Rbac Application Multiple"
					],
					"operation": [
						"Role Management Device Management Role Definitions Update Inherits Permissions From"
					]
				}
			}
		},
];
