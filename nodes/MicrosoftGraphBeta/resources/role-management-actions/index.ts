import type { INodeProperties } from 'n8n-workflow';

export const roleManagementActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					]
				}
			},
			"options": [
				{
					"name": "Role Management Cloud PC Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions",
					"value": "Role Management Cloud PC Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions",
					"action": "Invoke action importResourceActions",
					"description": "Invoke action importResourceActions",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/cloudPC/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/microsoft.graph.importResourceActions"
						}
					}
				},
				{
					"name": "Role Management Device Management Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions",
					"value": "Role Management Device Management Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions",
					"action": "Invoke action importResourceActions",
					"description": "Invoke action importResourceActions",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/deviceManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/microsoft.graph.importResourceActions"
						}
					}
				},
				{
					"name": "Role Management Directory Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions",
					"value": "Role Management Directory Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions",
					"action": "Invoke action importResourceActions",
					"description": "Invoke action importResourceActions",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/microsoft.graph.importResourceActions"
						}
					}
				},
				{
					"name": "Role Management Directory Role Assignment Schedule Requests Unified Role Assignment Schedule Request Cancel",
					"value": "Role Management Directory Role Assignment Schedule Requests Unified Role Assignment Schedule Request Cancel",
					"action": "Invoke action cancel",
					"description": "Immediately cancel a unifiedRoleAssignmentScheduleRequest object that is in a `Granted` status, and have the system automatically delete the canceled request after 30 days. After calling this action, the **status** of the canceled **unifiedRoleAssignmentScheduleRequest** changes to `Canceled`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Role Management Directory Role Eligibility Schedule Requests Unified Role Eligibility Schedule Request Cancel",
					"value": "Role Management Directory Role Eligibility Schedule Requests Unified Role Eligibility Schedule Request Cancel",
					"action": "Invoke action cancel",
					"description": "Immediately cancel a unifiedRoleEligibilityScheduleRequest that is in a `Granted` status, and have the system automatically delete the cancelled request after 30 days. After calling this action, the **status** of the cancelled unifiedRoleEligibilityScheduleRequest changes to `Revoked`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/directory/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions",
					"value": "Role Management Entitlement Management Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions",
					"action": "Invoke action importResourceActions",
					"description": "Invoke action importResourceActions",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/microsoft.graph.importResourceActions"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Assignment Schedule Requests Unified Role Assignment Schedule Request Cancel",
					"value": "Role Management Entitlement Management Role Assignment Schedule Requests Unified Role Assignment Schedule Request Cancel",
					"action": "Invoke action cancel",
					"description": "Immediately cancel a unifiedRoleAssignmentScheduleRequest object that is in a `Granted` status, and have the system automatically delete the canceled request after 30 days. After calling this action, the **status** of the canceled **unifiedRoleAssignmentScheduleRequest** changes to `Canceled`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{{$parameter[\"unifiedRoleAssignmentScheduleRequest-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Role Management Entitlement Management Role Eligibility Schedule Requests Unified Role Eligibility Schedule Request Cancel",
					"value": "Role Management Entitlement Management Role Eligibility Schedule Requests Unified Role Eligibility Schedule Request Cancel",
					"action": "Invoke action cancel",
					"description": "Immediately cancel a unifiedRoleEligibilityScheduleRequest that is in a `Granted` status, and have the system automatically delete the cancelled request after 30 days. After calling this action, the **status** of the cancelled unifiedRoleEligibilityScheduleRequest changes to `Revoked`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{{$parameter[\"unifiedRoleEligibilityScheduleRequest-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Role Management Exchange Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions",
					"value": "Role Management Exchange Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions",
					"action": "Invoke action importResourceActions",
					"description": "Invoke action importResourceActions",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roleManagement/exchange/resourceNamespaces/{{$parameter[\"unifiedRbacResourceNamespace-id\"]}}/microsoft.graph.importResourceActions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/microsoft.graph.importResourceActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "Overwrite Resource Namespace",
			"name": "overwriteResourceNamespace",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "overwriteResourceNamespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Cloud PC Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/microsoft.graph.importResourceActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "Overwrite Resource Namespace",
			"name": "overwriteResourceNamespace",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "overwriteResourceNamespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Device Management Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/microsoft.graph.importResourceActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "Overwrite Resource Namespace",
			"name": "overwriteResourceNamespace",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "overwriteResourceNamespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Directory Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Directory Role Assignment Schedule Requests Unified Role Assignment Schedule Request Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Directory Role Eligibility Schedule Requests Unified Role Eligibility Schedule Request Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/microsoft.graph.importResourceActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "Overwrite Resource Namespace",
			"name": "overwriteResourceNamespace",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "overwriteResourceNamespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Entitlement Management Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Entitlement Management Role Assignment Schedule Requests Unified Role Assignment Schedule Request Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Entitlement Management Role Eligibility Schedule Requests Unified Role Eligibility Schedule Request Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/microsoft.graph.importResourceActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "Overwrite Resource Namespace",
			"name": "overwriteResourceNamespace",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "overwriteResourceNamespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Actions"
					],
					"operation": [
						"Role Management Exchange Resource Namespaces Unified Rbac Resource Namespace Import Resource Actions"
					]
				}
			}
		},
];
