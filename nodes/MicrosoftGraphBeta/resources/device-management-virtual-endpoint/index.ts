import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementVirtualEndpointDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete Virtual Endpoint",
					"value": "Device Management Delete Virtual Endpoint",
					"action": "Delete navigation property virtualEndpoint for deviceManagement",
					"description": "Delete navigation property virtualEndpoint for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint"
						}
					}
				},
				{
					"name": "Device Management Get Virtual Endpoint",
					"value": "Device Management Get Virtual Endpoint",
					"action": "Get virtualEndpoint from deviceManagement",
					"description": "Get virtualEndpoint from deviceManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint"
						}
					}
				},
				{
					"name": "Device Management Update Virtual Endpoint",
					"value": "Device Management Update Virtual Endpoint",
					"action": "Update the navigation property virtualEndpoint in deviceManagement",
					"description": "Update the navigation property virtualEndpoint in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint List Audit Events",
					"value": "Device Management Virtual Endpoint List Audit Events",
					"action": "List auditEvents",
					"description": "List all the cloudPcAuditEvent objects for the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/auditEvents"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Create Audit Events",
					"value": "Device Management Virtual Endpoint Create Audit Events",
					"action": "Create new navigation property to auditEvents for deviceManagement",
					"description": "Create new navigation property to auditEvents for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/auditEvents"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Delete Audit Events",
					"value": "Device Management Virtual Endpoint Delete Audit Events",
					"action": "Delete navigation property auditEvents for deviceManagement",
					"description": "Delete navigation property auditEvents for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/auditEvents/{{$parameter[\"cloudPcAuditEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get Audit Events",
					"value": "Device Management Virtual Endpoint Get Audit Events",
					"action": "Get auditEvents from deviceManagement",
					"description": "Cloud PC audit event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/auditEvents/{{$parameter[\"cloudPcAuditEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Update Audit Events",
					"value": "Device Management Virtual Endpoint Update Audit Events",
					"action": "Update the navigation property auditEvents in deviceManagement",
					"description": "Update the navigation property auditEvents in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/auditEvents/{{$parameter[\"cloudPcAuditEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint List Cloud P Cs",
					"value": "Device Management Virtual Endpoint List Cloud P Cs",
					"action": "List cloudPCs",
					"description": "List the cloudPC devices in a tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Create Cloud P Cs",
					"value": "Device Management Virtual Endpoint Create Cloud P Cs",
					"action": "Create new navigation property to cloudPCs for deviceManagement",
					"description": "Create new navigation property to cloudPCs for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Delete Cloud P Cs",
					"value": "Device Management Virtual Endpoint Delete Cloud P Cs",
					"action": "Delete navigation property cloudPCs for deviceManagement",
					"description": "Delete navigation property cloudPCs for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs/{{$parameter[\"cloudPC-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get Cloud P Cs",
					"value": "Device Management Virtual Endpoint Get Cloud P Cs",
					"action": "Get cloudPCs from deviceManagement",
					"description": "Cloud managed virtual desktops.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs/{{$parameter[\"cloudPC-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Update Cloud P Cs",
					"value": "Device Management Virtual Endpoint Update Cloud P Cs",
					"action": "Update the navigation property cloudPCs in deviceManagement",
					"description": "Update the navigation property cloudPCs in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs/{{$parameter[\"cloudPC-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Delete Cross Cloud Government Organization Mapping",
					"value": "Device Management Virtual Endpoint Delete Cross Cloud Government Organization Mapping",
					"action": "Delete navigation property crossCloudGovernmentOrganizationMapping for deviceManagement",
					"description": "Delete navigation property crossCloudGovernmentOrganizationMapping for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get Cross Cloud Government Organization Mapping",
					"value": "Device Management Virtual Endpoint Get Cross Cloud Government Organization Mapping",
					"action": "Get cloudPcCrossCloudGovernmentOrganizationMapping",
					"description": "Read the properties and relationships of a cloudPcCrossCloudGovernmentOrganizationMapping object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Update Cross Cloud Government Organization Mapping",
					"value": "Device Management Virtual Endpoint Update Cross Cloud Government Organization Mapping",
					"action": "Update the navigation property crossCloudGovernmentOrganizationMapping in deviceManagement",
					"description": "Update the navigation property crossCloudGovernmentOrganizationMapping in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint List Device Images",
					"value": "Device Management Virtual Endpoint List Device Images",
					"action": "List deviceImages",
					"description": "List the properties and relationships of the cloudPcDeviceImage objects (OS images) uploaded to Cloud PC.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/deviceImages"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Create Device Images",
					"value": "Device Management Virtual Endpoint Create Device Images",
					"action": "Create cloudPcDeviceImage",
					"description": "Create a new cloudPcDeviceImage object. Upload a custom OS image that you can later provision on Cloud PCs.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/deviceImages"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Delete Device Images",
					"value": "Device Management Virtual Endpoint Delete Device Images",
					"action": "Delete navigation property deviceImages for deviceManagement",
					"description": "Delete navigation property deviceImages for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/deviceImages/{{$parameter[\"cloudPcDeviceImage-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get Device Images",
					"value": "Device Management Virtual Endpoint Get Device Images",
					"action": "Get deviceImages from deviceManagement",
					"description": "The image resource on Cloud PC.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/deviceImages/{{$parameter[\"cloudPcDeviceImage-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Update Device Images",
					"value": "Device Management Virtual Endpoint Update Device Images",
					"action": "Update the navigation property deviceImages in deviceManagement",
					"description": "Update the navigation property deviceImages in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/deviceImages/{{$parameter[\"cloudPcDeviceImage-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint List External Partner Settings",
					"value": "Device Management Virtual Endpoint List External Partner Settings",
					"action": "List cloudPcExternalPartnerSettings",
					"description": "Get a list of the cloudPcExternalPartnerSetting objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/externalPartnerSettings"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Create External Partner Settings",
					"value": "Device Management Virtual Endpoint Create External Partner Settings",
					"action": "Create cloudPcExternalPartnerSetting",
					"description": "Create a new cloudPcExternalPartnerSetting object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/externalPartnerSettings"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Delete External Partner Settings",
					"value": "Device Management Virtual Endpoint Delete External Partner Settings",
					"action": "Delete navigation property externalPartnerSettings for deviceManagement",
					"description": "Delete navigation property externalPartnerSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/externalPartnerSettings/{{$parameter[\"cloudPcExternalPartnerSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get External Partner Settings",
					"value": "Device Management Virtual Endpoint Get External Partner Settings",
					"action": "Get externalPartnerSettings from deviceManagement",
					"description": "The external partner settings on a Cloud PC.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/externalPartnerSettings/{{$parameter[\"cloudPcExternalPartnerSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Update External Partner Settings",
					"value": "Device Management Virtual Endpoint Update External Partner Settings",
					"action": "Update the navigation property externalPartnerSettings in deviceManagement",
					"description": "Update the navigation property externalPartnerSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/externalPartnerSettings/{{$parameter[\"cloudPcExternalPartnerSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint List Gallery Images",
					"value": "Device Management Virtual Endpoint List Gallery Images",
					"action": "List galleryImages",
					"description": "List the properties and relationships of the cloudPcGalleryImage objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/galleryImages"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Create Gallery Images",
					"value": "Device Management Virtual Endpoint Create Gallery Images",
					"action": "Create new navigation property to galleryImages for deviceManagement",
					"description": "Create new navigation property to galleryImages for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/galleryImages"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Delete Gallery Images",
					"value": "Device Management Virtual Endpoint Delete Gallery Images",
					"action": "Delete navigation property galleryImages for deviceManagement",
					"description": "Delete navigation property galleryImages for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/galleryImages/{{$parameter[\"cloudPcGalleryImage-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get Gallery Images",
					"value": "Device Management Virtual Endpoint Get Gallery Images",
					"action": "Get galleryImages from deviceManagement",
					"description": "The gallery image resource on Cloud PC.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/galleryImages/{{$parameter[\"cloudPcGalleryImage-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Update Gallery Images",
					"value": "Device Management Virtual Endpoint Update Gallery Images",
					"action": "Update the navigation property galleryImages in deviceManagement",
					"description": "Update the navigation property galleryImages in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/galleryImages/{{$parameter[\"cloudPcGalleryImage-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint List On Premises Connections",
					"value": "Device Management Virtual Endpoint List On Premises Connections",
					"action": "List onPremisesConnections",
					"description": "List properties and relationships of the cloudPcOnPremisesConnection objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/onPremisesConnections"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Create On Premises Connections",
					"value": "Device Management Virtual Endpoint Create On Premises Connections",
					"action": "Create cloudPcOnPremisesConnection",
					"description": "Create a new cloudPcOnPremisesConnection object for provisioning Cloud PCs.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/onPremisesConnections"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Delete On Premises Connections",
					"value": "Device Management Virtual Endpoint Delete On Premises Connections",
					"action": "Delete navigation property onPremisesConnections for deviceManagement",
					"description": "Delete navigation property onPremisesConnections for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/onPremisesConnections/{{$parameter[\"cloudPcOnPremisesConnection-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get On Premises Connections",
					"value": "Device Management Virtual Endpoint Get On Premises Connections",
					"action": "Get onPremisesConnections from deviceManagement",
					"description": "A defined collection of Azure resource information that can be used to establish on-premises network connectivity for Cloud PCs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/onPremisesConnections/{{$parameter[\"cloudPcOnPremisesConnection-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Update On Premises Connections",
					"value": "Device Management Virtual Endpoint Update On Premises Connections",
					"action": "Update the navigation property onPremisesConnections in deviceManagement",
					"description": "Update the navigation property onPremisesConnections in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/onPremisesConnections/{{$parameter[\"cloudPcOnPremisesConnection-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Delete Organization Settings",
					"value": "Device Management Virtual Endpoint Delete Organization Settings",
					"action": "Delete navigation property organizationSettings for deviceManagement",
					"description": "Delete navigation property organizationSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/organizationSettings"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get Organization Settings",
					"value": "Device Management Virtual Endpoint Get Organization Settings",
					"action": "Get cloudPcOrganizationSettings",
					"description": "Read the properties and relationships of the cloudPcOrganizationSettings from the current tenant. A tenant has only one **cloudPcOrganizationSettings** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/organizationSettings"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Update Organization Settings",
					"value": "Device Management Virtual Endpoint Update Organization Settings",
					"action": "Update cloudPcOrganizationSettings",
					"description": "Update the properties of the cloudPcOrganizationSettings object in a tenant.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/organizationSettings"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint List Provisioning Policies",
					"value": "Device Management Virtual Endpoint List Provisioning Policies",
					"action": "List provisioningPolicies",
					"description": "List properties and relationships of the cloudPcProvisioningPolicy objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/provisioningPolicies"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Create Provisioning Policies",
					"value": "Device Management Virtual Endpoint Create Provisioning Policies",
					"action": "Create cloudPcProvisioningPolicy",
					"description": "Create a new cloudPcProvisioningPolicy object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/provisioningPolicies"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Delete Provisioning Policies",
					"value": "Device Management Virtual Endpoint Delete Provisioning Policies",
					"action": "Delete navigation property provisioningPolicies for deviceManagement",
					"description": "Delete navigation property provisioningPolicies for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/provisioningPolicies/{{$parameter[\"cloudPcProvisioningPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get Provisioning Policies",
					"value": "Device Management Virtual Endpoint Get Provisioning Policies",
					"action": "Get provisioningPolicies from deviceManagement",
					"description": "Cloud PC provisioning policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/provisioningPolicies/{{$parameter[\"cloudPcProvisioningPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Update Provisioning Policies",
					"value": "Device Management Virtual Endpoint Update Provisioning Policies",
					"action": "Update the navigation property provisioningPolicies in deviceManagement",
					"description": "Update the navigation property provisioningPolicies in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/provisioningPolicies/{{$parameter[\"cloudPcProvisioningPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Provisioning Policies List Assignments",
					"value": "Device Management Virtual Endpoint Provisioning Policies List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "A defined collection of provisioning policy assignments. Represents the set of Microsoft 365 groups and security groups in Azure AD that have provisioning policy assigned. Returned only on $expand. For an example about how to get the assignments relationship, see Get cloudPcProvisioningPolicy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/provisioningPolicies/{{$parameter[\"cloudPcProvisioningPolicy-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Provisioning Policies Create Assignments",
					"value": "Device Management Virtual Endpoint Provisioning Policies Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/provisioningPolicies/{{$parameter[\"cloudPcProvisioningPolicy-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Provisioning Policies Delete Assignments",
					"value": "Device Management Virtual Endpoint Provisioning Policies Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/provisioningPolicies/{{$parameter[\"cloudPcProvisioningPolicy-id\"]}}/assignments/{{$parameter[\"cloudPcProvisioningPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Provisioning Policies Get Assignments",
					"value": "Device Management Virtual Endpoint Provisioning Policies Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "A defined collection of provisioning policy assignments. Represents the set of Microsoft 365 groups and security groups in Azure AD that have provisioning policy assigned. Returned only on $expand. For an example about how to get the assignments relationship, see Get cloudPcProvisioningPolicy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/provisioningPolicies/{{$parameter[\"cloudPcProvisioningPolicy-id\"]}}/assignments/{{$parameter[\"cloudPcProvisioningPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Provisioning Policies Update Assignments",
					"value": "Device Management Virtual Endpoint Provisioning Policies Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/provisioningPolicies/{{$parameter[\"cloudPcProvisioningPolicy-id\"]}}/assignments/{{$parameter[\"cloudPcProvisioningPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Delete Reports",
					"value": "Device Management Virtual Endpoint Delete Reports",
					"action": "Delete navigation property reports for deviceManagement",
					"description": "Delete navigation property reports for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/reports"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get Reports",
					"value": "Device Management Virtual Endpoint Get Reports",
					"action": "Get reports from deviceManagement",
					"description": "Cloud PC related reports.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/reports"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Update Reports",
					"value": "Device Management Virtual Endpoint Update Reports",
					"action": "Update the navigation property reports in deviceManagement",
					"description": "Update the navigation property reports in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/reports"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Reports List Export Jobs",
					"value": "Device Management Virtual Endpoint Reports List Export Jobs",
					"action": "Get exportJobs from deviceManagement",
					"description": "The export jobs created for downloading reports.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/reports/exportJobs"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Reports Create Export Jobs",
					"value": "Device Management Virtual Endpoint Reports Create Export Jobs",
					"action": "Create cloudPcExportJob",
					"description": "Create a new cloudPcExportJob resource to initiate downloading the entire or specified portion of a report. Use the GET cloudPcExportJob operation to verify the **exportJobStatus** property of the **cloudPcExportJob** resource. When the property becomes `completed`, the report has finished downloading in the location specified by the **exportUrl** property. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/reports/exportJobs"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Reports Delete Export Jobs",
					"value": "Device Management Virtual Endpoint Reports Delete Export Jobs",
					"action": "Delete navigation property exportJobs for deviceManagement",
					"description": "Delete navigation property exportJobs for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/reports/exportJobs/{{$parameter[\"cloudPcExportJob-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Reports Get Export Jobs",
					"value": "Device Management Virtual Endpoint Reports Get Export Jobs",
					"action": "Get exportJobs from deviceManagement",
					"description": "The export jobs created for downloading reports.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/reports/exportJobs/{{$parameter[\"cloudPcExportJob-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Reports Update Export Jobs",
					"value": "Device Management Virtual Endpoint Reports Update Export Jobs",
					"action": "Update the navigation property exportJobs in deviceManagement",
					"description": "Update the navigation property exportJobs in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/reports/exportJobs/{{$parameter[\"cloudPcExportJob-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint List Service Plans",
					"value": "Device Management Virtual Endpoint List Service Plans",
					"action": "List servicePlans",
					"description": "List the currently available service plans that an organization can purchase for their Cloud PCs. For examples of currently available service plans, see Windows 365 compare plans and pricing. Currently, Microsoft Graph API is available for Windows 365 Enterprise.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/servicePlans"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Create Service Plans",
					"value": "Device Management Virtual Endpoint Create Service Plans",
					"action": "Create new navigation property to servicePlans for deviceManagement",
					"description": "Create new navigation property to servicePlans for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/servicePlans"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Delete Service Plans",
					"value": "Device Management Virtual Endpoint Delete Service Plans",
					"action": "Delete navigation property servicePlans for deviceManagement",
					"description": "Delete navigation property servicePlans for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/servicePlans/{{$parameter[\"cloudPcServicePlan-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get Service Plans",
					"value": "Device Management Virtual Endpoint Get Service Plans",
					"action": "Get servicePlans from deviceManagement",
					"description": "Cloud PC service plans.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/servicePlans/{{$parameter[\"cloudPcServicePlan-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Update Service Plans",
					"value": "Device Management Virtual Endpoint Update Service Plans",
					"action": "Update the navigation property servicePlans in deviceManagement",
					"description": "Update the navigation property servicePlans in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/servicePlans/{{$parameter[\"cloudPcServicePlan-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint List Shared Use Service Plans",
					"value": "Device Management Virtual Endpoint List Shared Use Service Plans",
					"action": "List cloudPcSharedUseServicePlans",
					"description": "Get a list of the cloudPcSharedUseServicePlan objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/sharedUseServicePlans"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Create Shared Use Service Plans",
					"value": "Device Management Virtual Endpoint Create Shared Use Service Plans",
					"action": "Create new navigation property to sharedUseServicePlans for deviceManagement",
					"description": "Create new navigation property to sharedUseServicePlans for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/sharedUseServicePlans"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Delete Shared Use Service Plans",
					"value": "Device Management Virtual Endpoint Delete Shared Use Service Plans",
					"action": "Delete navigation property sharedUseServicePlans for deviceManagement",
					"description": "Delete navigation property sharedUseServicePlans for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/sharedUseServicePlans/{{$parameter[\"cloudPcSharedUseServicePlan-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get Shared Use Service Plans",
					"value": "Device Management Virtual Endpoint Get Shared Use Service Plans",
					"action": "Get sharedUseServicePlans from deviceManagement",
					"description": "Cloud PC shared-use service plans.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/sharedUseServicePlans/{{$parameter[\"cloudPcSharedUseServicePlan-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Update Shared Use Service Plans",
					"value": "Device Management Virtual Endpoint Update Shared Use Service Plans",
					"action": "Update the navigation property sharedUseServicePlans in deviceManagement",
					"description": "Update the navigation property sharedUseServicePlans in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/sharedUseServicePlans/{{$parameter[\"cloudPcSharedUseServicePlan-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint List Snapshots",
					"value": "Device Management Virtual Endpoint List Snapshots",
					"action": "List snapshots",
					"description": "Get a list of cloudPcSnapshot objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/snapshots"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Create Snapshots",
					"value": "Device Management Virtual Endpoint Create Snapshots",
					"action": "Create new navigation property to snapshots for deviceManagement",
					"description": "Create new navigation property to snapshots for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/snapshots"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Delete Snapshots",
					"value": "Device Management Virtual Endpoint Delete Snapshots",
					"action": "Delete navigation property snapshots for deviceManagement",
					"description": "Delete navigation property snapshots for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/snapshots/{{$parameter[\"cloudPcSnapshot-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get Snapshots",
					"value": "Device Management Virtual Endpoint Get Snapshots",
					"action": "Get snapshots from deviceManagement",
					"description": "Cloud PC snapshots.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/snapshots/{{$parameter[\"cloudPcSnapshot-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Update Snapshots",
					"value": "Device Management Virtual Endpoint Update Snapshots",
					"action": "Update the navigation property snapshots in deviceManagement",
					"description": "Update the navigation property snapshots in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/snapshots/{{$parameter[\"cloudPcSnapshot-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint List Supported Regions",
					"value": "Device Management Virtual Endpoint List Supported Regions",
					"action": "List supportedRegions",
					"description": "List the supported regions that are available for creating Cloud PC connections.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/supportedRegions"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Create Supported Regions",
					"value": "Device Management Virtual Endpoint Create Supported Regions",
					"action": "Create new navigation property to supportedRegions for deviceManagement",
					"description": "Create new navigation property to supportedRegions for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/supportedRegions"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Delete Supported Regions",
					"value": "Device Management Virtual Endpoint Delete Supported Regions",
					"action": "Delete navigation property supportedRegions for deviceManagement",
					"description": "Delete navigation property supportedRegions for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/supportedRegions/{{$parameter[\"cloudPcSupportedRegion-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get Supported Regions",
					"value": "Device Management Virtual Endpoint Get Supported Regions",
					"action": "Get supportedRegions from deviceManagement",
					"description": "Cloud PC supported regions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/supportedRegions/{{$parameter[\"cloudPcSupportedRegion-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Update Supported Regions",
					"value": "Device Management Virtual Endpoint Update Supported Regions",
					"action": "Update the navigation property supportedRegions in deviceManagement",
					"description": "Update the navigation property supportedRegions in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/supportedRegions/{{$parameter[\"cloudPcSupportedRegion-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint List User Settings",
					"value": "Device Management Virtual Endpoint List User Settings",
					"action": "List userSettings",
					"description": "Retrieve a list of cloudPcUserSetting objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/userSettings"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Create User Settings",
					"value": "Device Management Virtual Endpoint Create User Settings",
					"action": "Create cloudPcUserSetting",
					"description": "Create a new cloudPcUserSetting object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/userSettings"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Delete User Settings",
					"value": "Device Management Virtual Endpoint Delete User Settings",
					"action": "Delete navigation property userSettings for deviceManagement",
					"description": "Delete navigation property userSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/userSettings/{{$parameter[\"cloudPcUserSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Get User Settings",
					"value": "Device Management Virtual Endpoint Get User Settings",
					"action": "Get userSettings from deviceManagement",
					"description": "Cloud PC user settings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/userSettings/{{$parameter[\"cloudPcUserSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Update User Settings",
					"value": "Device Management Virtual Endpoint Update User Settings",
					"action": "Update the navigation property userSettings in deviceManagement",
					"description": "Update the navigation property userSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/userSettings/{{$parameter[\"cloudPcUserSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint User Settings List Assignments",
					"value": "Device Management Virtual Endpoint User Settings List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "Represents the set of Microsoft 365 groups and security groups in Azure Active Directory that have cloudPCUserSetting assigned. Returned only on $expand. For an example, see Get cloudPcUserSettingample.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/userSettings/{{$parameter[\"cloudPcUserSetting-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint User Settings Create Assignments",
					"value": "Device Management Virtual Endpoint User Settings Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/userSettings/{{$parameter[\"cloudPcUserSetting-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint User Settings Delete Assignments",
					"value": "Device Management Virtual Endpoint User Settings Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/virtualEndpoint/userSettings/{{$parameter[\"cloudPcUserSetting-id\"]}}/assignments/{{$parameter[\"cloudPcUserSettingAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint User Settings Get Assignments",
					"value": "Device Management Virtual Endpoint User Settings Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "Represents the set of Microsoft 365 groups and security groups in Azure Active Directory that have cloudPCUserSetting assigned. Returned only on $expand. For an example, see Get cloudPcUserSettingample.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/virtualEndpoint/userSettings/{{$parameter[\"cloudPcUserSetting-id\"]}}/assignments/{{$parameter[\"cloudPcUserSettingAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint User Settings Update Assignments",
					"value": "Device Management Virtual Endpoint User Settings Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/virtualEndpoint/userSettings/{{$parameter[\"cloudPcUserSetting-id\"]}}/assignments/{{$parameter[\"cloudPcUserSettingAssignment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Delete Virtual Endpoint"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Delete Virtual Endpoint"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Get Virtual Endpoint"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Get Virtual Endpoint"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Get Virtual Endpoint"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Update Virtual Endpoint"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Update Virtual Endpoint"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/auditEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Audit Events"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Audit Events"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Audit Events"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Audit Events"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Audit Events"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Audit Events"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Audit Events"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Audit Events"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Audit Events"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/auditEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Audit Events"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/auditEvents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Audit Events"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Audit Events"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Audit Events"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Audit Events"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Audit Events"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Audit Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Audit Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Audit Events"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/cloudPCs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Cloud P Cs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Cloud P Cs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Cloud P Cs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Cloud P Cs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Cloud P Cs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Cloud P Cs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Cloud P Cs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Cloud P Cs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Cloud P Cs"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/cloudPCs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Cloud P Cs"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/cloudPCs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Cloud P Cs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Cloud P Cs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Cloud P Cs"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Cloud P Cs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Cloud P Cs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Cloud P Cs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Cloud P Cs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Cloud P Cs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Cross Cloud Government Organization Mapping"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Cross Cloud Government Organization Mapping"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Cross Cloud Government Organization Mapping"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Cross Cloud Government Organization Mapping"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Cross Cloud Government Organization Mapping"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Cross Cloud Government Organization Mapping"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Cross Cloud Government Organization Mapping"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/deviceImages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Device Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Device Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Device Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Device Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Device Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Device Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Device Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Device Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Device Images"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/deviceImages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Device Images"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/deviceImages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Device Images"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Device Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Device Images"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Device Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Device Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Device Images"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Device Images"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Device Images"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/externalPartnerSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List External Partner Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List External Partner Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List External Partner Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List External Partner Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List External Partner Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List External Partner Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List External Partner Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List External Partner Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List External Partner Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/externalPartnerSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create External Partner Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/externalPartnerSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create External Partner Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete External Partner Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete External Partner Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get External Partner Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get External Partner Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get External Partner Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update External Partner Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update External Partner Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/galleryImages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Gallery Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Gallery Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Gallery Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Gallery Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Gallery Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Gallery Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Gallery Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Gallery Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Gallery Images"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/galleryImages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Gallery Images"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/galleryImages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Gallery Images"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Gallery Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Gallery Images"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Gallery Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Gallery Images"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Gallery Images"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Gallery Images"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Gallery Images"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/onPremisesConnections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List On Premises Connections"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List On Premises Connections"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List On Premises Connections"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List On Premises Connections"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List On Premises Connections"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List On Premises Connections"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List On Premises Connections"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List On Premises Connections"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List On Premises Connections"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/onPremisesConnections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create On Premises Connections"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/onPremisesConnections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create On Premises Connections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete On Premises Connections"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete On Premises Connections"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get On Premises Connections"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get On Premises Connections"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get On Premises Connections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update On Premises Connections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update On Premises Connections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/organizationSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Organization Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Organization Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/organizationSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Organization Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Organization Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Organization Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/organizationSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Organization Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/organizationSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Organization Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/provisioningPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Provisioning Policies"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Provisioning Policies"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Provisioning Policies"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Provisioning Policies"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Provisioning Policies"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Provisioning Policies"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Provisioning Policies"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Provisioning Policies"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Provisioning Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/provisioningPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Provisioning Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/provisioningPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Provisioning Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Provisioning Policies"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Provisioning Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Provisioning Policies"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Provisioning Policies"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Provisioning Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Provisioning Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Provisioning Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies Delete Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies Get Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies Get Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Reports"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Reports"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Reports"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Reports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Reports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/reports<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/reports/exportJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports List Export Jobs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports List Export Jobs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports List Export Jobs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports List Export Jobs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports List Export Jobs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports List Export Jobs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports List Export Jobs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports List Export Jobs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports List Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/reports/exportJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Create Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/reports/exportJobs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Create Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Delete Export Jobs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Delete Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Export Jobs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Export Jobs"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Update Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Update Export Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/servicePlans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Service Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/servicePlans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Service Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/servicePlans<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Service Plans"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Service Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Service Plans"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Service Plans"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Service Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/sharedUseServicePlans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Shared Use Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Shared Use Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Shared Use Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Shared Use Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Shared Use Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Shared Use Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Shared Use Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Shared Use Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Shared Use Service Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/sharedUseServicePlans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Shared Use Service Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/sharedUseServicePlans<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Shared Use Service Plans"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/sharedUseServicePlans/{cloudPcSharedUseServicePlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Shared Use Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Shared Use Service Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/sharedUseServicePlans/{cloudPcSharedUseServicePlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Shared Use Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Shared Use Service Plans"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Shared Use Service Plans"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/sharedUseServicePlans/{cloudPcSharedUseServicePlan-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Shared Use Service Plans"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/sharedUseServicePlans/{cloudPcSharedUseServicePlan-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Shared Use Service Plans"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/snapshots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Snapshots"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Snapshots"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Snapshots"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Snapshots"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Snapshots"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Snapshots"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Snapshots"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Snapshots"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Snapshots"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/snapshots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Snapshots"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/snapshots<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Snapshots"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Snapshots"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Snapshots"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Snapshots"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Snapshots"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Snapshots"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Snapshots"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Snapshots"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/supportedRegions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Supported Regions"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Supported Regions"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Supported Regions"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Supported Regions"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Supported Regions"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Supported Regions"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Supported Regions"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Supported Regions"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List Supported Regions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/supportedRegions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Supported Regions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/supportedRegions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create Supported Regions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Supported Regions"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete Supported Regions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Supported Regions"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Supported Regions"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get Supported Regions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Supported Regions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update Supported Regions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/userSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List User Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List User Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List User Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List User Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List User Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List User Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List User Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List User Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint List User Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/userSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create User Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/userSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Create User Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete User Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Delete User Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get User Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get User Settings"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Get User Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update User Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint Update User Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings List Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings Delete Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings Get Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings Get Assignments"
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
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Virtual Endpoint"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings Update Assignments"
					]
				}
			}
		},
];
