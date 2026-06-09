import type { INodeProperties } from 'n8n-workflow';

export const organizationOrganizationSettingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					]
				}
			},
			"options": [
				{
					"name": "Organization Delete Settings",
					"value": "Organization Delete Settings",
					"action": "Delete navigation property settings for organization",
					"description": "Delete navigation property settings for organization",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Organization Get Settings",
					"value": "Organization Get Settings",
					"action": "Get organizationSettings",
					"description": "Retrieve the properties and relationships of an organizationSettings object, including **profileCardProperties**. This operation does not return insightsSettings. Depending on the type of insights, you can get their settings by using list itemInsights or list peopleInsights. This operation does not return microsoftApplicationDataAccessSettings. To get microsoftApplicationDataAccessSettings, use list microsoftApplicationDataAccessSettings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Organization Update Settings",
					"value": "Organization Update Settings",
					"action": "Update the navigation property settings in organization",
					"description": "Update the navigation property settings in organization",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Organization Settings Delete Contact Insights",
					"value": "Organization Settings Delete Contact Insights",
					"action": "Delete navigation property contactInsights for organization",
					"description": "Delete navigation property contactInsights for organization",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/contactInsights"
						}
					}
				},
				{
					"name": "Organization Settings Get Contact Insights",
					"value": "Organization Settings Get Contact Insights",
					"action": "List contactInsights",
					"description": "Get the properties of an insightsSettings object for displaying or returning contact insights in an organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/contactInsights"
						}
					}
				},
				{
					"name": "Organization Settings Update Contact Insights",
					"value": "Organization Settings Update Contact Insights",
					"action": "Update insightsSettings",
					"description": "Update the privacy settings to display or return the specified type of insights in an organization. The type of settings can be contact insights, item insights, or people insights. To learn more about customizing insights privacy for your organization, see:\n-  Customize item insights privacy \n-  Customize people insights privacy",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/contactInsights"
						}
					}
				},
				{
					"name": "Organization Settings Delete Item Insights",
					"value": "Organization Settings Delete Item Insights",
					"action": "Delete navigation property itemInsights for organization",
					"description": "Delete navigation property itemInsights for organization",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/itemInsights"
						}
					}
				},
				{
					"name": "Organization Settings Get Item Insights",
					"value": "Organization Settings Get Item Insights",
					"action": "List itemInsights",
					"description": "Get the properties of an insightsSettings object for displaying or returning item insights in an organization. To learn how to customize the privacy of item insights in an organization, see Customize item insights privacy. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/itemInsights"
						}
					}
				},
				{
					"name": "Organization Settings Update Item Insights",
					"value": "Organization Settings Update Item Insights",
					"action": "Update insightsSettings",
					"description": "Update the privacy settings to display or return the specified type of insights in an organization. The type of settings can be contact insights, item insights, or people insights. To learn more about customizing insights privacy for your organization, see:\n-  Customize item insights privacy \n-  Customize people insights privacy",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/itemInsights"
						}
					}
				},
				{
					"name": "Organization Settings Delete Microsoft Application Data Access",
					"value": "Organization Settings Delete Microsoft Application Data Access",
					"action": "Delete navigation property microsoftApplicationDataAccess for organization",
					"description": "Delete navigation property microsoftApplicationDataAccess for organization",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/microsoftApplicationDataAccess"
						}
					}
				},
				{
					"name": "Organization Settings Get Microsoft Application Data Access",
					"value": "Organization Settings Get Microsoft Application Data Access",
					"action": "List microsoftApplicationDataAccessSettings",
					"description": "Get the _settings_ in a microsoftApplicationDataAccessSettings object that specify access from Microsoft applications to Microsoft 365 user data in an organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/microsoftApplicationDataAccess"
						}
					}
				},
				{
					"name": "Organization Settings Update Microsoft Application Data Access",
					"value": "Organization Settings Update Microsoft Application Data Access",
					"action": "Update microsoftApplicationDataAccessSettings",
					"description": "Update the settings in a microsoftApplicationDataAccessSettings object that specify access from Microsoft applications to Microsoft 365 user data in an organization.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/microsoftApplicationDataAccess"
						}
					}
				},
				{
					"name": "Organization Settings Delete People Insights",
					"value": "Organization Settings Delete People Insights",
					"action": "Delete navigation property peopleInsights for organization",
					"description": "Delete navigation property peopleInsights for organization",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/peopleInsights"
						}
					}
				},
				{
					"name": "Organization Settings Get People Insights",
					"value": "Organization Settings Get People Insights",
					"action": "List peopleInsights",
					"description": "Get the properties of an insightsSettings object for displaying or returning people insights in an organization. To learn how to customize privacy for people insights in an organization, see Customize people insights privacy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/peopleInsights"
						}
					}
				},
				{
					"name": "Organization Settings Update People Insights",
					"value": "Organization Settings Update People Insights",
					"action": "Update insightsSettings",
					"description": "Update the privacy settings to display or return the specified type of insights in an organization. The type of settings can be contact insights, item insights, or people insights. To learn more about customizing insights privacy for your organization, see:\n-  Customize item insights privacy \n-  Customize people insights privacy",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/peopleInsights"
						}
					}
				},
				{
					"name": "Organization Settings List Profile Card Properties",
					"value": "Organization Settings List Profile Card Properties",
					"action": "List profileCardProperties",
					"description": "Get a collection of profileCardProperty resources of an organization. Each resource is identified by its **directoryPropertyName** property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/profileCardProperties"
						}
					}
				},
				{
					"name": "Organization Settings Create Profile Card Properties",
					"value": "Organization Settings Create Profile Card Properties",
					"action": "Create profileCardProperty",
					"description": "Create a new profileCardProperty for an organization. The new property is identified by its **directoryPropertyName** property. For more information on adding properties to the profile card for an organization, see customize the profile card.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/profileCardProperties"
						}
					}
				},
				{
					"name": "Organization Settings Delete Profile Card Properties",
					"value": "Organization Settings Delete Profile Card Properties",
					"action": "Delete navigation property profileCardProperties for organization",
					"description": "Delete navigation property profileCardProperties for organization",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/profileCardProperties/{{$parameter[\"profileCardProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Organization Settings Get Profile Card Properties",
					"value": "Organization Settings Get Profile Card Properties",
					"action": "Get profileCardProperties from organization",
					"description": "Contains a collection of the properties an administrator has defined as visible on the Microsoft 365 profile card. Get organization settings returns the properties configured for profile cards for the organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/profileCardProperties/{{$parameter[\"profileCardProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Organization Settings Update Profile Card Properties",
					"value": "Organization Settings Update Profile Card Properties",
					"action": "Update the navigation property profileCardProperties in organization",
					"description": "Update the navigation property profileCardProperties in organization",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/settings/profileCardProperties/{{$parameter[\"profileCardProperty-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /organization/{organization-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Delete Settings"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Delete Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Get Settings"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Get Settings"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Get Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Update Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Update Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organization/{organization-id}/settings/contactInsights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Delete Contact Insights"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Delete Contact Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/settings/contactInsights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Get Contact Insights"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Get Contact Insights"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Get Contact Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/settings/contactInsights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Update Contact Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/settings/contactInsights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Update Contact Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organization/{organization-id}/settings/itemInsights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Delete Item Insights"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Delete Item Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/settings/itemInsights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Get Item Insights"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Get Item Insights"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Get Item Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/settings/itemInsights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Update Item Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/settings/itemInsights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Update Item Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organization/{organization-id}/settings/microsoftApplicationDataAccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Delete Microsoft Application Data Access"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Delete Microsoft Application Data Access"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/settings/microsoftApplicationDataAccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Get Microsoft Application Data Access"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Get Microsoft Application Data Access"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Get Microsoft Application Data Access"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/settings/microsoftApplicationDataAccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Update Microsoft Application Data Access"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/settings/microsoftApplicationDataAccess<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Update Microsoft Application Data Access"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organization/{organization-id}/settings/peopleInsights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Delete People Insights"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Delete People Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/settings/peopleInsights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Get People Insights"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Get People Insights"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Get People Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/settings/peopleInsights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Update People Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/settings/peopleInsights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Update People Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/settings/profileCardProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings List Profile Card Properties"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings List Profile Card Properties"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings List Profile Card Properties"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings List Profile Card Properties"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings List Profile Card Properties"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings List Profile Card Properties"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings List Profile Card Properties"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings List Profile Card Properties"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings List Profile Card Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /organization/{organization-id}/settings/profileCardProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Create Profile Card Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /organization/{organization-id}/settings/profileCardProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Create Profile Card Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organization/{organization-id}/settings/profileCardProperties/{profileCardProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Delete Profile Card Properties"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Delete Profile Card Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/settings/profileCardProperties/{profileCardProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Get Profile Card Properties"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Get Profile Card Properties"
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
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Get Profile Card Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/settings/profileCardProperties/{profileCardProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Update Profile Card Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/settings/profileCardProperties/{profileCardProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organization Settings"
					],
					"operation": [
						"Organization Settings Update Profile Card Properties"
					]
				}
			}
		},
];
