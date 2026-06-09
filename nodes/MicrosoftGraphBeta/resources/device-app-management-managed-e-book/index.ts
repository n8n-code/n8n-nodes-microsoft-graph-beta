import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementManagedEBookDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Managed E Books",
					"value": "Device App Management List Managed E Books",
					"action": "Get managedEBooks from deviceAppManagement",
					"description": "The Managed eBook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedEBooks"
						}
					}
				},
				{
					"name": "Device App Management Create Managed E Books",
					"value": "Device App Management Create Managed E Books",
					"action": "Create new navigation property to managedEBooks for deviceAppManagement",
					"description": "Create new navigation property to managedEBooks for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedEBooks"
						}
					}
				},
				{
					"name": "Device App Management Delete Managed E Books",
					"value": "Device App Management Delete Managed E Books",
					"action": "Delete navigation property managedEBooks for deviceAppManagement",
					"description": "Delete navigation property managedEBooks for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Managed E Books",
					"value": "Device App Management Get Managed E Books",
					"action": "Get managedEBooks from deviceAppManagement",
					"description": "The Managed eBook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Managed E Books",
					"value": "Device App Management Update Managed E Books",
					"action": "Update the navigation property managedEBooks in deviceAppManagement",
					"description": "Update the navigation property managedEBooks in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books List Assignments",
					"value": "Device App Management Managed E Books List Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "The list of assignments for this eBook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Create Assignments",
					"value": "Device App Management Managed E Books Create Assignments",
					"action": "Create new navigation property to assignments for deviceAppManagement",
					"description": "Create new navigation property to assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Delete Assignments",
					"value": "Device App Management Managed E Books Delete Assignments",
					"action": "Delete navigation property assignments for deviceAppManagement",
					"description": "Delete navigation property assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/assignments/{{$parameter[\"managedEBookAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Get Assignments",
					"value": "Device App Management Managed E Books Get Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "The list of assignments for this eBook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/assignments/{{$parameter[\"managedEBookAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Update Assignments",
					"value": "Device App Management Managed E Books Update Assignments",
					"action": "Update the navigation property assignments in deviceAppManagement",
					"description": "Update the navigation property assignments in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/assignments/{{$parameter[\"managedEBookAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books List Categories",
					"value": "Device App Management Managed E Books List Categories",
					"action": "Get categories from deviceAppManagement",
					"description": "The list of categories for this eBook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/categories"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Get Categories",
					"value": "Device App Management Managed E Books Get Categories",
					"action": "Get categories from deviceAppManagement",
					"description": "The list of categories for this eBook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/categories/{{$parameter[\"managedEBookCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books List Device States",
					"value": "Device App Management Managed E Books List Device States",
					"action": "Get deviceStates from deviceAppManagement",
					"description": "The list of installation states for this eBook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/deviceStates"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Create Device States",
					"value": "Device App Management Managed E Books Create Device States",
					"action": "Create new navigation property to deviceStates for deviceAppManagement",
					"description": "Create new navigation property to deviceStates for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/deviceStates"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Delete Device States",
					"value": "Device App Management Managed E Books Delete Device States",
					"action": "Delete navigation property deviceStates for deviceAppManagement",
					"description": "Delete navigation property deviceStates for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/deviceStates/{{$parameter[\"deviceInstallState-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Get Device States",
					"value": "Device App Management Managed E Books Get Device States",
					"action": "Get deviceStates from deviceAppManagement",
					"description": "The list of installation states for this eBook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/deviceStates/{{$parameter[\"deviceInstallState-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Update Device States",
					"value": "Device App Management Managed E Books Update Device States",
					"action": "Update the navigation property deviceStates in deviceAppManagement",
					"description": "Update the navigation property deviceStates in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/deviceStates/{{$parameter[\"deviceInstallState-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Delete Install Summary",
					"value": "Device App Management Managed E Books Delete Install Summary",
					"action": "Delete navigation property installSummary for deviceAppManagement",
					"description": "Delete navigation property installSummary for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/installSummary"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Get Install Summary",
					"value": "Device App Management Managed E Books Get Install Summary",
					"action": "Get installSummary from deviceAppManagement",
					"description": "Mobile App Install Summary.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/installSummary"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Update Install Summary",
					"value": "Device App Management Managed E Books Update Install Summary",
					"action": "Update the navigation property installSummary in deviceAppManagement",
					"description": "Update the navigation property installSummary in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/installSummary"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books List User State Summary",
					"value": "Device App Management Managed E Books List User State Summary",
					"action": "Get userStateSummary from deviceAppManagement",
					"description": "The list of installation states for this eBook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/userStateSummary"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Create User State Summary",
					"value": "Device App Management Managed E Books Create User State Summary",
					"action": "Create new navigation property to userStateSummary for deviceAppManagement",
					"description": "Create new navigation property to userStateSummary for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/userStateSummary"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Delete User State Summary",
					"value": "Device App Management Managed E Books Delete User State Summary",
					"action": "Delete navigation property userStateSummary for deviceAppManagement",
					"description": "Delete navigation property userStateSummary for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/userStateSummary/{{$parameter[\"userInstallStateSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Get User State Summary",
					"value": "Device App Management Managed E Books Get User State Summary",
					"action": "Get userStateSummary from deviceAppManagement",
					"description": "The list of installation states for this eBook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/userStateSummary/{{$parameter[\"userInstallStateSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books Update User State Summary",
					"value": "Device App Management Managed E Books Update User State Summary",
					"action": "Update the navigation property userStateSummary in deviceAppManagement",
					"description": "Update the navigation property userStateSummary in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/userStateSummary/{{$parameter[\"userInstallStateSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books User State Summary List Device States",
					"value": "Device App Management Managed E Books User State Summary List Device States",
					"action": "Get deviceStates from deviceAppManagement",
					"description": "The install state of the eBook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/userStateSummary/{{$parameter[\"userInstallStateSummary-id\"]}}/deviceStates"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books User State Summary Create Device States",
					"value": "Device App Management Managed E Books User State Summary Create Device States",
					"action": "Create new navigation property to deviceStates for deviceAppManagement",
					"description": "Create new navigation property to deviceStates for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/userStateSummary/{{$parameter[\"userInstallStateSummary-id\"]}}/deviceStates"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books User State Summary Delete Device States",
					"value": "Device App Management Managed E Books User State Summary Delete Device States",
					"action": "Delete navigation property deviceStates for deviceAppManagement",
					"description": "Delete navigation property deviceStates for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/userStateSummary/{{$parameter[\"userInstallStateSummary-id\"]}}/deviceStates/{{$parameter[\"deviceInstallState-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books User State Summary Get Device States",
					"value": "Device App Management Managed E Books User State Summary Get Device States",
					"action": "Get deviceStates from deviceAppManagement",
					"description": "The install state of the eBook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/userStateSummary/{{$parameter[\"userInstallStateSummary-id\"]}}/deviceStates/{{$parameter[\"deviceInstallState-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Managed E Books User State Summary Update Device States",
					"value": "Device App Management Managed E Books User State Summary Update Device States",
					"action": "Update the navigation property deviceStates in deviceAppManagement",
					"description": "Update the navigation property deviceStates in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/managedEBooks/{{$parameter[\"managedEBook-id\"]}}/userStateSummary/{{$parameter[\"userInstallStateSummary-id\"]}}/deviceStates/{{$parameter[\"deviceInstallState-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/managedEBooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management List Managed E Books"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management List Managed E Books"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management List Managed E Books"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management List Managed E Books"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management List Managed E Books"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management List Managed E Books"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management List Managed E Books"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management List Managed E Books"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management List Managed E Books"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedEBooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Create Managed E Books"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedEBooks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Create Managed E Books"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Delete Managed E Books"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Delete Managed E Books"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedEBooks/{managedEBook-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Get Managed E Books"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Get Managed E Books"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Get Managed E Books"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Update Managed E Books"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Update Managed E Books"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Assignments"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Assignments"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Assignments"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Assignments"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Assignments"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Assignments"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Assignments"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Assignments"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Delete Assignments"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Get Assignments"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Get Assignments"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedEBooks/{managedEBook-id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Categories"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Categories"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Categories"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Categories"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Categories"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Categories"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Categories"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Categories"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedEBooks/{managedEBook-id}/categories/{managedEBookCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Get Categories"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Get Categories"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Get Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List Device States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Create Device States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Create Device States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Delete Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Delete Device States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Get Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Get Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Get Device States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Update Device States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Update Device States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Delete Install Summary"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Delete Install Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Get Install Summary"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Get Install Summary"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Get Install Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Update Install Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Update Install Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List User State Summary"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List User State Summary"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List User State Summary"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List User State Summary"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List User State Summary"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List User State Summary"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List User State Summary"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List User State Summary"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books List User State Summary"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Create User State Summary"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Create User State Summary"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Delete User State Summary"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Delete User State Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Get User State Summary"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Get User State Summary"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Get User State Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Update User State Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books Update User State Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary List Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary List Device States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary Create Device States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary Create Device States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary Delete Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary Delete Device States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary Get Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary Get Device States"
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
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary Get Device States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary Update Device States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}/deviceStates/{deviceInstallState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Managed E Book"
					],
					"operation": [
						"Device App Management Managed E Books User State Summary Update Device States"
					]
				}
			}
		},
];
