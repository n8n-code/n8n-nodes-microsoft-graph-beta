import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Android Device Owner Enrollment Profiles Android Device Owner Enrollment Profile Create Token",
					"value": "Device Management Android Device Owner Enrollment Profiles Android Device Owner Enrollment Profile Create Token",
					"action": "Invoke action createToken",
					"description": "Invoke action createToken",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{{$parameter[\"androidDeviceOwnerEnrollmentProfile-id\"]}}/microsoft.graph.createToken"
						}
					}
				},
				{
					"name": "Device Management Android Device Owner Enrollment Profiles Android Device Owner Enrollment Profile Revoke Token",
					"value": "Device Management Android Device Owner Enrollment Profiles Android Device Owner Enrollment Profile Revoke Token",
					"action": "Invoke action revokeToken",
					"description": "Invoke action revokeToken",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{{$parameter[\"androidDeviceOwnerEnrollmentProfile-id\"]}}/microsoft.graph.revokeToken"
						}
					}
				},
				{
					"name": "Device Management Android For Work Enrollment Profiles Android For Work Enrollment Profile Create Token",
					"value": "Device Management Android For Work Enrollment Profiles Android For Work Enrollment Profile Create Token",
					"action": "Invoke action createToken",
					"description": "Invoke action createToken",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidForWorkEnrollmentProfiles/{{$parameter[\"androidForWorkEnrollmentProfile-id\"]}}/microsoft.graph.createToken"
						}
					}
				},
				{
					"name": "Device Management Android For Work Enrollment Profiles Android For Work Enrollment Profile Revoke Token",
					"value": "Device Management Android For Work Enrollment Profiles Android For Work Enrollment Profile Revoke Token",
					"action": "Invoke action revokeToken",
					"description": "Invoke action revokeToken",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidForWorkEnrollmentProfiles/{{$parameter[\"androidForWorkEnrollmentProfile-id\"]}}/microsoft.graph.revokeToken"
						}
					}
				},
				{
					"name": "Device Management Android For Work Settings Complete Signup",
					"value": "Device Management Android For Work Settings Complete Signup",
					"action": "Invoke action completeSignup",
					"description": "Invoke action completeSignup",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidForWorkSettings/microsoft.graph.completeSignup"
						}
					}
				},
				{
					"name": "Device Management Android For Work Settings Request Signup URL",
					"value": "Device Management Android For Work Settings Request Signup URL",
					"action": "Invoke action requestSignupUrl",
					"description": "Invoke action requestSignupUrl",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidForWorkSettings/microsoft.graph.requestSignupUrl"
						}
					}
				},
				{
					"name": "Device Management Android For Work Settings Sync Apps",
					"value": "Device Management Android For Work Settings Sync Apps",
					"action": "Invoke action syncApps",
					"description": "Invoke action syncApps",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidForWorkSettings/microsoft.graph.syncApps"
						}
					}
				},
				{
					"name": "Device Management Android For Work Settings Unbind",
					"value": "Device Management Android For Work Settings Unbind",
					"action": "Invoke action unbind",
					"description": "Invoke action unbind",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidForWorkSettings/microsoft.graph.unbind"
						}
					}
				},
				{
					"name": "Device Management Android Managed Store Account Enterprise Settings Add Apps",
					"value": "Device Management Android Managed Store Account Enterprise Settings Add Apps",
					"action": "Invoke action addApps",
					"description": "Invoke action addApps",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.addApps"
						}
					}
				},
				{
					"name": "Device Management Android Managed Store Account Enterprise Settings Approve Apps",
					"value": "Device Management Android Managed Store Account Enterprise Settings Approve Apps",
					"action": "Invoke action approveApps",
					"description": "Invoke action approveApps",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.approveApps"
						}
					}
				},
				{
					"name": "Device Management Android Managed Store Account Enterprise Settings Complete Signup",
					"value": "Device Management Android Managed Store Account Enterprise Settings Complete Signup",
					"action": "Invoke action completeSignup",
					"description": "Invoke action completeSignup",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.completeSignup"
						}
					}
				},
				{
					"name": "Device Management Android Managed Store Account Enterprise Settings Create Google Play Web Token",
					"value": "Device Management Android Managed Store Account Enterprise Settings Create Google Play Web Token",
					"action": "Invoke action createGooglePlayWebToken",
					"description": "Generates a web token that is used in an embeddable component.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.createGooglePlayWebToken"
						}
					}
				},
				{
					"name": "Device Management Android Managed Store Account Enterprise Settings Request Signup URL",
					"value": "Device Management Android Managed Store Account Enterprise Settings Request Signup URL",
					"action": "Invoke action requestSignupUrl",
					"description": "Invoke action requestSignupUrl",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.requestSignupUrl"
						}
					}
				},
				{
					"name": "Device Management Android Managed Store Account Enterprise Settings Set Android Device Owner Fully Managed Enrollment State",
					"value": "Device Management Android Managed Store Account Enterprise Settings Set Android Device Owner Fully Managed Enrollment State",
					"action": "Invoke action setAndroidDeviceOwnerFullyManagedEnrollmentState",
					"description": "Sets the AndroidManagedStoreAccountEnterpriseSettings AndroidDeviceOwnerFullyManagedEnrollmentEnabled to the given value.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.setAndroidDeviceOwnerFullyManagedEnrollmentState"
						}
					}
				},
				{
					"name": "Device Management Android Managed Store Account Enterprise Settings Sync Apps",
					"value": "Device Management Android Managed Store Account Enterprise Settings Sync Apps",
					"action": "Invoke action syncApps",
					"description": "Invoke action syncApps",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.syncApps"
						}
					}
				},
				{
					"name": "Device Management Android Managed Store Account Enterprise Settings Unbind",
					"value": "Device Management Android Managed Store Account Enterprise Settings Unbind",
					"action": "Invoke action unbind",
					"description": "Invoke action unbind",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.unbind"
						}
					}
				},
				{
					"name": "Device Management Apple Push Notification Certificate Generate Apple Push Notification Certificate Signing Request",
					"value": "Device Management Apple Push Notification Certificate Generate Apple Push Notification Certificate Signing Request",
					"action": "Invoke action generateApplePushNotificationCertificateSigningRequest",
					"description": "Download Apple push notification certificate signing request",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/applePushNotificationCertificate/microsoft.graph.generateApplePushNotificationCertificateSigningRequest"
						}
					}
				},
				{
					"name": "Device Management Apple User Initiated Enrollment Profiles Apple User Initiated Enrollment Profile Set Priority",
					"value": "Device Management Apple User Initiated Enrollment Profiles Apple User Initiated Enrollment Profile Set Priority",
					"action": "Invoke action setPriority",
					"description": "Invoke action setPriority",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/appleUserInitiatedEnrollmentProfiles/{{$parameter[\"appleUserInitiatedEnrollmentProfile-id\"]}}/microsoft.graph.setPriority"
						}
					}
				},
				{
					"name": "Device Management Assignment Filters Enable",
					"value": "Device Management Assignment Filters Enable",
					"action": "Invoke action enable",
					"description": "Invoke action enable",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/assignmentFilters/microsoft.graph.enable"
						}
					}
				},
				{
					"name": "Device Management Assignment Filters Validate Filter",
					"value": "Device Management Assignment Filters Validate Filter",
					"action": "Invoke action validateFilter",
					"description": "Invoke action validateFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/assignmentFilters/microsoft.graph.validateFilter"
						}
					}
				},
				{
					"name": "Device Management Certificate Connector Details Certificate Connector Details Get Health Metric Time Series",
					"value": "Device Management Certificate Connector Details Certificate Connector Details Get Health Metric Time Series",
					"action": "Invoke action getHealthMetricTimeSeries",
					"description": "Invoke action getHealthMetricTimeSeries",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/certificateConnectorDetails/{{$parameter[\"certificateConnectorDetails-id\"]}}/microsoft.graph.getHealthMetricTimeSeries"
						}
					}
				},
				{
					"name": "Device Management Certificate Connector Details Certificate Connector Details Get Health Metrics",
					"value": "Device Management Certificate Connector Details Certificate Connector Details Get Health Metrics",
					"action": "Invoke action getHealthMetrics",
					"description": "Invoke action getHealthMetrics",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/certificateConnectorDetails/{{$parameter[\"certificateConnectorDetails-id\"]}}/microsoft.graph.getHealthMetrics"
						}
					}
				},
				{
					"name": "Device Management Chrome OS Onboarding Settings Connect",
					"value": "Device Management Chrome OS Onboarding Settings Connect",
					"action": "Invoke action connect",
					"description": "Invoke action connect",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/chromeOSOnboardingSettings/microsoft.graph.connect"
						}
					}
				},
				{
					"name": "Device Management Chrome OS Onboarding Settings Disconnect",
					"value": "Device Management Chrome OS Onboarding Settings Disconnect",
					"action": "Invoke action disconnect",
					"description": "Invoke action disconnect",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/chromeOSOnboardingSettings/microsoft.graph.disconnect"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Bulk Reprovision Cloud Pc",
					"value": "Device Management Comanaged Devices Bulk Reprovision Cloud Pc",
					"action": "Invoke action bulkReprovisionCloudPc",
					"description": "Bulk reprovision a set of Cloud PC devices with Intune managed device IDs.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/microsoft.graph.bulkReprovisionCloudPc"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Bulk Restore Cloud Pc",
					"value": "Device Management Comanaged Devices Bulk Restore Cloud Pc",
					"action": "Invoke action bulkRestoreCloudPc",
					"description": "Restore multiple Cloud PC devices with a single request that includes the IDs of Intune managed devices and a restore point date and time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/microsoft.graph.bulkRestoreCloudPc"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Bulk Set Cloud Pc Review Status",
					"value": "Device Management Comanaged Devices Bulk Set Cloud Pc Review Status",
					"action": "Invoke action bulkSetCloudPcReviewStatus",
					"description": "Set the review status of multiple Cloud PC devices with a single request that includes the IDs of Intune managed devices.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/microsoft.graph.bulkSetCloudPcReviewStatus"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Download App Diagnostics",
					"value": "Device Management Comanaged Devices Download App Diagnostics",
					"action": "Invoke action downloadAppDiagnostics",
					"description": "Invoke action downloadAppDiagnostics",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/microsoft.graph.downloadAppDiagnostics"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Execute Action",
					"value": "Device Management Comanaged Devices Execute Action",
					"action": "Invoke action executeAction",
					"description": "Invoke action executeAction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/microsoft.graph.executeAction"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Move Devices To OU",
					"value": "Device Management Comanaged Devices Move Devices To OU",
					"action": "Invoke action moveDevicesToOU",
					"description": "Invoke action moveDevicesToOU",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/microsoft.graph.moveDevicesToOU"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Log Collection Requests Device Log Collection Response Create Download URL",
					"value": "Device Management Comanaged Devices Managed Device Log Collection Requests Device Log Collection Response Create Download URL",
					"action": "Invoke action createDownloadUrl",
					"description": "Invoke action createDownloadUrl",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests/{{$parameter[\"deviceLogCollectionResponse-id\"]}}/microsoft.graph.createDownloadUrl"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Activate Device Esim",
					"value": "Device Management Comanaged Devices Managed Device Activate Device Esim",
					"action": "Invoke action activateDeviceEsim",
					"description": "Activate eSIM on the device.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.activateDeviceEsim"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Bypass Activation Lock",
					"value": "Device Management Comanaged Devices Managed Device Bypass Activation Lock",
					"action": "Invoke action bypassActivationLock",
					"description": "Bypass activation lock",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.bypassActivationLock"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Clean Windows Device",
					"value": "Device Management Comanaged Devices Managed Device Clean Windows Device",
					"action": "Invoke action cleanWindowsDevice",
					"description": "Clean Windows device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.cleanWindowsDevice"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Create Device Log Collection Request",
					"value": "Device Management Comanaged Devices Managed Device Create Device Log Collection Request",
					"action": "Invoke action createDeviceLogCollectionRequest",
					"description": "Invoke action createDeviceLogCollectionRequest",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.createDeviceLogCollectionRequest"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Create Remote Help Session",
					"value": "Device Management Comanaged Devices Managed Device Create Remote Help Session",
					"action": "Invoke action createRemoteHelpSession",
					"description": "Remote help - Create session with a specific device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.createRemoteHelpSession"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Delete User From Shared Apple Device",
					"value": "Device Management Comanaged Devices Managed Device Delete User From Shared Apple Device",
					"action": "Invoke action deleteUserFromSharedAppleDevice",
					"description": "Delete user from shared Apple device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.deleteUserFromSharedAppleDevice"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Deprovision",
					"value": "Device Management Comanaged Devices Managed Device Deprovision",
					"action": "Invoke action deprovision",
					"description": "Invoke action deprovision",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.deprovision"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Disable",
					"value": "Device Management Comanaged Devices Managed Device Disable",
					"action": "Invoke action disable",
					"description": "Invoke action disable",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.disable"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Disable Lost Mode",
					"value": "Device Management Comanaged Devices Managed Device Disable Lost Mode",
					"action": "Invoke action disableLostMode",
					"description": "Disable lost mode",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.disableLostMode"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Enable Lost Mode",
					"value": "Device Management Comanaged Devices Managed Device Enable Lost Mode",
					"action": "Invoke action enableLostMode",
					"description": "Enable lost mode",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.enableLostMode"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device End Remote Help Session",
					"value": "Device Management Comanaged Devices Managed Device End Remote Help Session",
					"action": "Invoke action endRemoteHelpSession",
					"description": "Remote help - End ACS session, Pubsub session and delete Remote help session",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.endRemoteHelpSession"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Enroll Now Action",
					"value": "Device Management Comanaged Devices Managed Device Enroll Now Action",
					"action": "Invoke action enrollNowAction",
					"description": "Trigger comanagement enrollment action on ConfigurationManager client",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.enrollNowAction"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Initiate Mobile Device Management Key Recovery",
					"value": "Device Management Comanaged Devices Managed Device Initiate Mobile Device Management Key Recovery",
					"action": "Invoke action initiateMobileDeviceManagementKeyRecovery",
					"description": "Perform MDM key recovery and TPM attestation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.initiateMobileDeviceManagementKeyRecovery"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Initiate On Demand Proactive Remediation",
					"value": "Device Management Comanaged Devices Managed Device Initiate On Demand Proactive Remediation",
					"action": "Invoke action initiateOnDemandProactiveRemediation",
					"description": "Perform On Demand Proactive Remediation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.initiateOnDemandProactiveRemediation"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Locate Device",
					"value": "Device Management Comanaged Devices Managed Device Locate Device",
					"action": "Invoke action locateDevice",
					"description": "Locate a device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.locateDevice"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Logout Shared Apple Device Active User",
					"value": "Device Management Comanaged Devices Managed Device Logout Shared Apple Device Active User",
					"action": "Invoke action logoutSharedAppleDeviceActiveUser",
					"description": "Logout shared Apple device active user",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.logoutSharedAppleDeviceActiveUser"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Override Compliance State",
					"value": "Device Management Comanaged Devices Managed Device Override Compliance State",
					"action": "Invoke action overrideComplianceState",
					"description": "Invoke action overrideComplianceState",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.overrideComplianceState"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Play Lost Mode Sound",
					"value": "Device Management Comanaged Devices Managed Device Play Lost Mode Sound",
					"action": "Invoke action playLostModeSound",
					"description": "Play lost mode sound",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.playLostModeSound"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Reboot Now",
					"value": "Device Management Comanaged Devices Managed Device Reboot Now",
					"action": "Invoke action rebootNow",
					"description": "Reboot device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.rebootNow"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Recover Passcode",
					"value": "Device Management Comanaged Devices Managed Device Recover Passcode",
					"action": "Invoke action recoverPasscode",
					"description": "Recover passcode",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.recoverPasscode"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Reenable",
					"value": "Device Management Comanaged Devices Managed Device Reenable",
					"action": "Invoke action reenable",
					"description": "Invoke action reenable",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.reenable"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Remote Lock",
					"value": "Device Management Comanaged Devices Managed Device Remote Lock",
					"action": "Invoke action remoteLock",
					"description": "Remote lock",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.remoteLock"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Remove Device Firmware Configuration Interface Management",
					"value": "Device Management Comanaged Devices Managed Device Remove Device Firmware Configuration Interface Management",
					"action": "Invoke action removeDeviceFirmwareConfigurationInterfaceManagement",
					"description": "Remove device from Device Firmware Configuration Interface management",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.removeDeviceFirmwareConfigurationInterfaceManagement"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Reprovision Cloud Pc",
					"value": "Device Management Comanaged Devices Managed Device Reprovision Cloud Pc",
					"action": "Invoke action reprovisionCloudPc",
					"description": "Reprovision a Cloud PC with an Intune managed device ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.reprovisionCloudPc"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Request Remote Assistance",
					"value": "Device Management Comanaged Devices Managed Device Request Remote Assistance",
					"action": "Invoke action requestRemoteAssistance",
					"description": "Request remote assistance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.requestRemoteAssistance"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Request Remote Help Session Access",
					"value": "Device Management Comanaged Devices Managed Device Request Remote Help Session Access",
					"action": "Invoke action requestRemoteHelpSessionAccess",
					"description": "Remote help - Request Remote help session access permission for an existing session",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.requestRemoteHelpSessionAccess"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Reset Passcode",
					"value": "Device Management Comanaged Devices Managed Device Reset Passcode",
					"action": "Invoke action resetPasscode",
					"description": "Reset passcode",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.resetPasscode"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Resize Cloud Pc",
					"value": "Device Management Comanaged Devices Managed Device Resize Cloud Pc",
					"action": "Invoke action resizeCloudPc",
					"description": "Upgrade or downgrade an existing Cloud PC to another configuration with a new virtual CPU (vCPU) and storage size.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.resizeCloudPc"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Restore Cloud Pc",
					"value": "Device Management Comanaged Devices Managed Device Restore Cloud Pc",
					"action": "Invoke action restoreCloudPc",
					"description": "Restore a Cloud PC device to a previous state with an Intune managed device ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.restoreCloudPc"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Retire",
					"value": "Device Management Comanaged Devices Managed Device Retire",
					"action": "Invoke action retire",
					"description": "Retire a device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.retire"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Revoke Apple Vpp Licenses",
					"value": "Device Management Comanaged Devices Managed Device Revoke Apple Vpp Licenses",
					"action": "Invoke action revokeAppleVppLicenses",
					"description": "Revoke all Apple Vpp licenses for a device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.revokeAppleVppLicenses"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Rotate Bit Locker Keys",
					"value": "Device Management Comanaged Devices Managed Device Rotate Bit Locker Keys",
					"action": "Invoke action rotateBitLockerKeys",
					"description": "Rotate BitLockerKeys",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.rotateBitLockerKeys"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Rotate File Vault Key",
					"value": "Device Management Comanaged Devices Managed Device Rotate File Vault Key",
					"action": "Invoke action rotateFileVaultKey",
					"description": "Invoke action rotateFileVaultKey",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.rotateFileVaultKey"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Send Custom Notification To Company Portal",
					"value": "Device Management Comanaged Devices Managed Device Send Custom Notification To Company Portal",
					"action": "Invoke action sendCustomNotificationToCompanyPortal",
					"description": "Invoke action sendCustomNotificationToCompanyPortal",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.sendCustomNotificationToCompanyPortal"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Set Cloud Pc Review Status",
					"value": "Device Management Comanaged Devices Managed Device Set Cloud Pc Review Status",
					"action": "Invoke action setCloudPcReviewStatus",
					"description": "Set the review status of a specific Cloud PC device. Use this API to set the review status of a Cloud PC to in review if you consider a Cloud PC as suspicious. After the review is completed, use this API again to set the Cloud PC back to a normal state.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.setCloudPcReviewStatus"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Set Device Name",
					"value": "Device Management Comanaged Devices Managed Device Set Device Name",
					"action": "Invoke action setDeviceName",
					"description": "Set device name of the device.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.setDeviceName"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Shut Down",
					"value": "Device Management Comanaged Devices Managed Device Shut Down",
					"action": "Invoke action shutDown",
					"description": "Shut down device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.shutDown"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Sync Device",
					"value": "Device Management Comanaged Devices Managed Device Sync Device",
					"action": "Invoke action syncDevice",
					"description": "Invoke action syncDevice",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.syncDevice"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Trigger Configuration Manager Action",
					"value": "Device Management Comanaged Devices Managed Device Trigger Configuration Manager Action",
					"action": "Invoke action triggerConfigurationManagerAction",
					"description": "Trigger action on ConfigurationManager client",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.triggerConfigurationManagerAction"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Update Windows Device Account",
					"value": "Device Management Comanaged Devices Managed Device Update Windows Device Account",
					"action": "Invoke action updateWindowsDeviceAccount",
					"description": "Invoke action updateWindowsDeviceAccount",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.updateWindowsDeviceAccount"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Windows Defender Scan",
					"value": "Device Management Comanaged Devices Managed Device Windows Defender Scan",
					"action": "Invoke action windowsDefenderScan",
					"description": "Invoke action windowsDefenderScan",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.windowsDefenderScan"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Windows Defender Update Signatures",
					"value": "Device Management Comanaged Devices Managed Device Windows Defender Update Signatures",
					"action": "Invoke action windowsDefenderUpdateSignatures",
					"description": "Invoke action windowsDefenderUpdateSignatures",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.windowsDefenderUpdateSignatures"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Managed Device Wipe",
					"value": "Device Management Comanaged Devices Managed Device Wipe",
					"action": "Invoke action wipe",
					"description": "Wipe a device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.wipe"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Device Management Compliance Policy Assign",
					"value": "Device Management Compliance Policies Device Management Compliance Policy Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Device Management Compliance Policy Set Scheduled Actions",
					"value": "Device Management Compliance Policies Device Management Compliance Policy Set Scheduled Actions",
					"action": "Invoke action setScheduledActions",
					"description": "Invoke action setScheduledActions",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/microsoft.graph.setScheduledActions"
						}
					}
				},
				{
					"name": "Device Management Configuration Policies Device Management Configuration Policy Assign",
					"value": "Device Management Configuration Policies Device Management Configuration Policy Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/configurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Configuration Policies Device Management Configuration Policy Create Copy",
					"value": "Device Management Configuration Policies Device Management Configuration Policy Create Copy",
					"action": "Invoke action createCopy",
					"description": "Invoke action createCopy",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/configurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/microsoft.graph.createCopy"
						}
					}
				},
				{
					"name": "Device Management Configuration Policies Device Management Configuration Policy Reorder",
					"value": "Device Management Configuration Policies Device Management Configuration Policy Reorder",
					"action": "Invoke action reorder",
					"description": "Invoke action reorder",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/configurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/microsoft.graph.reorder"
						}
					}
				},
				{
					"name": "Device Management Data Sharing Consents Data Sharing Consent Consent To Data Sharing",
					"value": "Device Management Data Sharing Consents Data Sharing Consent Consent To Data Sharing",
					"action": "Invoke action consentToDataSharing",
					"description": "Invoke action consentToDataSharing",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/dataSharingConsents/{{$parameter[\"dataSharingConsent-id\"]}}/microsoft.graph.consentToDataSharing"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Dep Onboarding Setting Enrollment Profiles Enrollment Profile Set Default Profile",
					"value": "Device Management Dep Onboarding Settings Dep Onboarding Setting Enrollment Profiles Enrollment Profile Set Default Profile",
					"action": "Invoke action setDefaultProfile",
					"description": "Invoke action setDefaultProfile",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/enrollmentProfiles/{{$parameter[\"enrollmentProfile-id\"]}}/microsoft.graph.setDefaultProfile"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Dep Onboarding Setting Enrollment Profiles Enrollment Profile Update Device Profile Assignment",
					"value": "Device Management Dep Onboarding Settings Dep Onboarding Setting Enrollment Profiles Enrollment Profile Update Device Profile Assignment",
					"action": "Invoke action updateDeviceProfileAssignment",
					"description": "Invoke action updateDeviceProfileAssignment",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/enrollmentProfiles/{{$parameter[\"enrollmentProfile-id\"]}}/microsoft.graph.updateDeviceProfileAssignment"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Dep Onboarding Setting Imported Apple Device Identities Import Apple Device Identity List",
					"value": "Device Management Dep Onboarding Settings Dep Onboarding Setting Imported Apple Device Identities Import Apple Device Identity List",
					"action": "Invoke action importAppleDeviceIdentityList",
					"description": "Invoke action importAppleDeviceIdentityList",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/importedAppleDeviceIdentities/microsoft.graph.importAppleDeviceIdentityList"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Dep Onboarding Setting Generate Encryption Public Key",
					"value": "Device Management Dep Onboarding Settings Dep Onboarding Setting Generate Encryption Public Key",
					"action": "Invoke action generateEncryptionPublicKey",
					"description": "Generate a public key to use to encrypt the Apple device enrollment program token",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/microsoft.graph.generateEncryptionPublicKey"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Dep Onboarding Setting Share For School Data Sync Service",
					"value": "Device Management Dep Onboarding Settings Dep Onboarding Setting Share For School Data Sync Service",
					"action": "Invoke action shareForSchoolDataSyncService",
					"description": "Invoke action shareForSchoolDataSyncService",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/microsoft.graph.shareForSchoolDataSyncService"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Dep Onboarding Setting Sync With Apple Device Enrollment Program",
					"value": "Device Management Dep Onboarding Settings Dep Onboarding Setting Sync With Apple Device Enrollment Program",
					"action": "Invoke action syncWithAppleDeviceEnrollmentProgram",
					"description": "Synchronizes between Apple Device Enrollment Program and Intune",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/microsoft.graph.syncWithAppleDeviceEnrollmentProgram"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Dep Onboarding Setting Unshare For School Data Sync Service",
					"value": "Device Management Dep Onboarding Settings Dep Onboarding Setting Unshare For School Data Sync Service",
					"action": "Invoke action unshareForSchoolDataSyncService",
					"description": "Invoke action unshareForSchoolDataSyncService",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/microsoft.graph.unshareForSchoolDataSyncService"
						}
					}
				},
				{
					"name": "Device Management Dep Onboarding Settings Dep Onboarding Setting Upload Dep Token",
					"value": "Device Management Dep Onboarding Settings Dep Onboarding Setting Upload Dep Token",
					"action": "Invoke action uploadDepToken",
					"description": "Uploads a new Device Enrollment Program token",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/depOnboardingSettings/{{$parameter[\"depOnboardingSetting-id\"]}}/microsoft.graph.uploadDepToken"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Get Noncompliant Devices To Retire",
					"value": "Device Management Device Compliance Policies Get Noncompliant Devices To Retire",
					"action": "Invoke action getNoncompliantDevicesToRetire",
					"description": "Invoke action getNoncompliantDevicesToRetire",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicies/microsoft.graph.getNoncompliantDevicesToRetire"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Has Payload Links",
					"value": "Device Management Device Compliance Policies Has Payload Links",
					"action": "Invoke action hasPayloadLinks",
					"description": "Invoke action hasPayloadLinks",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicies/microsoft.graph.hasPayloadLinks"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Refresh Device Compliance Report Summarization",
					"value": "Device Management Device Compliance Policies Refresh Device Compliance Report Summarization",
					"action": "Invoke action refreshDeviceComplianceReportSummarization",
					"description": "Invoke action refreshDeviceComplianceReportSummarization",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicies/microsoft.graph.refreshDeviceComplianceReportSummarization"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Set Scheduled Retire State",
					"value": "Device Management Device Compliance Policies Set Scheduled Retire State",
					"action": "Invoke action setScheduledRetireState",
					"description": "Invoke action setScheduledRetireState",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicies/microsoft.graph.setScheduledRetireState"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Validate Compliance Script",
					"value": "Device Management Device Compliance Policies Validate Compliance Script",
					"action": "Invoke action validateComplianceScript",
					"description": "Invoke action validateComplianceScript",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicies/microsoft.graph.validateComplianceScript"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Device Compliance Policy Assign",
					"value": "Device Management Device Compliance Policies Device Compliance Policy Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Device Compliance Policy Schedule Actions For Rules",
					"value": "Device Management Device Compliance Policies Device Compliance Policy Schedule Actions For Rules",
					"action": "Invoke action scheduleActionsForRules",
					"description": "Invoke action scheduleActionsForRules",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/microsoft.graph.scheduleActionsForRules"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Scripts Device Compliance Script Assign",
					"value": "Device Management Device Compliance Scripts Device Compliance Script Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Get Targeted Users And Devices",
					"value": "Device Management Device Configurations Get Targeted Users And Devices",
					"action": "Invoke action getTargetedUsersAndDevices",
					"description": "Invoke action getTargetedUsersAndDevices",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceConfigurations/microsoft.graph.getTargetedUsersAndDevices"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Has Payload Links",
					"value": "Device Management Device Configurations Has Payload Links",
					"action": "Invoke action hasPayloadLinks",
					"description": "Invoke action hasPayloadLinks",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceConfigurations/microsoft.graph.hasPayloadLinks"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Device Configuration Assign",
					"value": "Device Management Device Configurations Device Configuration Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Device Configuration Assigned Access Multi Mode Profiles",
					"value": "Device Management Device Configurations Device Configuration Assigned Access Multi Mode Profiles",
					"action": "Invoke action assignedAccessMultiModeProfiles",
					"description": "Invoke action assignedAccessMultiModeProfiles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/microsoft.graph.assignedAccessMultiModeProfiles"
						}
					}
				},
				{
					"name": "Device Management Device Configurations Device Configuration Windows Privacy Access Controls",
					"value": "Device Management Device Configurations Device Configuration Windows Privacy Access Controls",
					"action": "Invoke action windowsPrivacyAccessControls",
					"description": "Invoke action windowsPrivacyAccessControls",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceConfigurations/{{$parameter[\"deviceConfiguration-id\"]}}/microsoft.graph.windowsPrivacyAccessControls"
						}
					}
				},
				{
					"name": "Device Management Device Custom Attribute Shell Scripts Device Custom Attribute Shell Script Assign",
					"value": "Device Management Device Custom Attribute Shell Scripts Device Custom Attribute Shell Script Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCustomAttributeShellScripts/{{$parameter[\"deviceCustomAttributeShellScript-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Device Enrollment Configurations Create Enrollment Notification Configuration",
					"value": "Device Management Device Enrollment Configurations Create Enrollment Notification Configuration",
					"action": "Invoke action createEnrollmentNotificationConfiguration",
					"description": "Invoke action createEnrollmentNotificationConfiguration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceEnrollmentConfigurations/microsoft.graph.createEnrollmentNotificationConfiguration"
						}
					}
				},
				{
					"name": "Device Management Device Enrollment Configurations Has Payload Links",
					"value": "Device Management Device Enrollment Configurations Has Payload Links",
					"action": "Invoke action hasPayloadLinks",
					"description": "Invoke action hasPayloadLinks",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceEnrollmentConfigurations/microsoft.graph.hasPayloadLinks"
						}
					}
				},
				{
					"name": "Device Management Device Enrollment Configurations Device Enrollment Configuration Assign",
					"value": "Device Management Device Enrollment Configurations Device Enrollment Configuration Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Device Enrollment Configurations Device Enrollment Configuration Set Priority",
					"value": "Device Management Device Enrollment Configurations Device Enrollment Configuration Set Priority",
					"action": "Invoke action setPriority",
					"description": "Invoke action setPriority",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}/microsoft.graph.setPriority"
						}
					}
				},
				{
					"name": "Device Management Device Health Scripts Enable Global Scripts",
					"value": "Device Management Device Health Scripts Enable Global Scripts",
					"action": "Invoke action enableGlobalScripts",
					"description": "Invoke action enableGlobalScripts",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceHealthScripts/microsoft.graph.enableGlobalScripts"
						}
					}
				},
				{
					"name": "Device Management Device Health Scripts Device Health Script Assign",
					"value": "Device Management Device Health Scripts Device Health Script Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceHealthScripts/{{$parameter[\"deviceHealthScript-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Device Health Scripts Device Health Script Get Global Script Highest Available Version",
					"value": "Device Management Device Health Scripts Device Health Script Get Global Script Highest Available Version",
					"action": "Invoke action getGlobalScriptHighestAvailableVersion",
					"description": "Update the Proprietary Device Health Script",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceHealthScripts/{{$parameter[\"deviceHealthScript-id\"]}}/microsoft.graph.getGlobalScriptHighestAvailableVersion"
						}
					}
				},
				{
					"name": "Device Management Device Health Scripts Device Health Script Update Global Script",
					"value": "Device Management Device Health Scripts Device Health Script Update Global Script",
					"action": "Invoke action updateGlobalScript",
					"description": "Update the Proprietary Device Health Script",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceHealthScripts/{{$parameter[\"deviceHealthScript-id\"]}}/microsoft.graph.updateGlobalScript"
						}
					}
				},
				{
					"name": "Device Management Device Management Partners Device Management Partner Terminate",
					"value": "Device Management Device Management Partners Device Management Partner Terminate",
					"action": "Invoke action terminate",
					"description": "Invoke action terminate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceManagementPartners/{{$parameter[\"deviceManagementPartner-id\"]}}/microsoft.graph.terminate"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Has Payload Links",
					"value": "Device Management Device Management Scripts Has Payload Links",
					"action": "Invoke action hasPayloadLinks",
					"description": "Invoke action hasPayloadLinks",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceManagementScripts/microsoft.graph.hasPayloadLinks"
						}
					}
				},
				{
					"name": "Device Management Device Management Scripts Device Management Script Assign",
					"value": "Device Management Device Management Scripts Device Management Script Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceManagementScripts/{{$parameter[\"deviceManagementScript-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Device Shell Scripts Device Shell Script Assign",
					"value": "Device Management Device Shell Scripts Device Shell Script Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceShellScripts/{{$parameter[\"deviceShellScript-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Embedded SIM Activation Code Pools Embedded SIM Activation Code Pool Assign",
					"value": "Device Management Embedded SIM Activation Code Pools Embedded SIM Activation Code Pool Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools/{{$parameter[\"embeddedSIMActivationCodePool-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Exchange Connectors Device Management Exchange Connector Sync",
					"value": "Device Management Exchange Connectors Device Management Exchange Connector Sync",
					"action": "Invoke action sync",
					"description": "Invoke action sync",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/exchangeConnectors/{{$parameter[\"deviceManagementExchangeConnector-id\"]}}/microsoft.graph.sync"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Group Policy Configuration Assign",
					"value": "Device Management Group Policy Configurations Group Policy Configuration Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Group Policy Configurations Group Policy Configuration Update Definition Values",
					"value": "Device Management Group Policy Configurations Group Policy Configuration Update Definition Values",
					"action": "Invoke action updateDefinitionValues",
					"description": "Invoke action updateDefinitionValues",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyConfigurations/{{$parameter[\"groupPolicyConfiguration-id\"]}}/microsoft.graph.updateDefinitionValues"
						}
					}
				},
				{
					"name": "Device Management Group Policy Migration Reports Create Migration Report",
					"value": "Device Management Group Policy Migration Reports Create Migration Report",
					"action": "Invoke action createMigrationReport",
					"description": "Invoke action createMigrationReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyMigrationReports/microsoft.graph.createMigrationReport"
						}
					}
				},
				{
					"name": "Device Management Group Policy Migration Reports Group Policy Migration Report Update Scope Tags",
					"value": "Device Management Group Policy Migration Reports Group Policy Migration Report Update Scope Tags",
					"action": "Invoke action updateScopeTags",
					"description": "Invoke action updateScopeTags",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyMigrationReports/{{$parameter[\"groupPolicyMigrationReport-id\"]}}/microsoft.graph.updateScopeTags"
						}
					}
				},
				{
					"name": "Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Add Language Files",
					"value": "Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Add Language Files",
					"action": "Invoke action addLanguageFiles",
					"description": "Invoke action addLanguageFiles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyUploadedDefinitionFiles/{{$parameter[\"groupPolicyUploadedDefinitionFile-id\"]}}/microsoft.graph.addLanguageFiles"
						}
					}
				},
				{
					"name": "Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Remove",
					"value": "Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Remove",
					"action": "Invoke action remove",
					"description": "Invoke action remove",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyUploadedDefinitionFiles/{{$parameter[\"groupPolicyUploadedDefinitionFile-id\"]}}/microsoft.graph.remove"
						}
					}
				},
				{
					"name": "Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Remove Language Files",
					"value": "Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Remove Language Files",
					"action": "Invoke action removeLanguageFiles",
					"description": "Invoke action removeLanguageFiles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyUploadedDefinitionFiles/{{$parameter[\"groupPolicyUploadedDefinitionFile-id\"]}}/microsoft.graph.removeLanguageFiles"
						}
					}
				},
				{
					"name": "Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Update Language Files",
					"value": "Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Update Language Files",
					"action": "Invoke action updateLanguageFiles",
					"description": "Invoke action updateLanguageFiles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyUploadedDefinitionFiles/{{$parameter[\"groupPolicyUploadedDefinitionFile-id\"]}}/microsoft.graph.updateLanguageFiles"
						}
					}
				},
				{
					"name": "Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Upload New Version",
					"value": "Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Upload New Version",
					"action": "Invoke action uploadNewVersion",
					"description": "Invoke action uploadNewVersion",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyUploadedDefinitionFiles/{{$parameter[\"groupPolicyUploadedDefinitionFile-id\"]}}/microsoft.graph.uploadNewVersion"
						}
					}
				},
				{
					"name": "Device Management Imported Device Identities Import Device Identity List",
					"value": "Device Management Imported Device Identities Import Device Identity List",
					"action": "Invoke action importDeviceIdentityList",
					"description": "Invoke action importDeviceIdentityList",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/importedDeviceIdentities/microsoft.graph.importDeviceIdentityList"
						}
					}
				},
				{
					"name": "Device Management Imported Device Identities Search Existing Identities",
					"value": "Device Management Imported Device Identities Search Existing Identities",
					"action": "Invoke action searchExistingIdentities",
					"description": "Invoke action searchExistingIdentities",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/importedDeviceIdentities/microsoft.graph.searchExistingIdentities"
						}
					}
				},
				{
					"name": "Device Management Imported Windows Autopilot Device Identities Import",
					"value": "Device Management Imported Windows Autopilot Device Identities Import",
					"action": "Invoke action import",
					"description": "Invoke action import",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/importedWindowsAutopilotDeviceIdentities/microsoft.graph.import"
						}
					}
				},
				{
					"name": "Device Management Intents Device Management Intent Assign",
					"value": "Device Management Intents Device Management Intent Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Intents Device Management Intent Create Copy",
					"value": "Device Management Intents Device Management Intent Create Copy",
					"action": "Invoke action createCopy",
					"description": "Invoke action createCopy",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/microsoft.graph.createCopy"
						}
					}
				},
				{
					"name": "Device Management Intents Device Management Intent Migrate To Template",
					"value": "Device Management Intents Device Management Intent Migrate To Template",
					"action": "Invoke action migrateToTemplate",
					"description": "Invoke action migrateToTemplate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/microsoft.graph.migrateToTemplate"
						}
					}
				},
				{
					"name": "Device Management Intents Device Management Intent Update Settings",
					"value": "Device Management Intents Device Management Intent Update Settings",
					"action": "Invoke action updateSettings",
					"description": "Invoke action updateSettings",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/intents/{{$parameter[\"deviceManagementIntent-id\"]}}/microsoft.graph.updateSettings"
						}
					}
				},
				{
					"name": "Device Management Intune Branding Profiles Intune Branding Profile Assign",
					"value": "Device Management Intune Branding Profiles Intune Branding Profile Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/intuneBrandingProfiles/{{$parameter[\"intuneBrandingProfile-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Bulk Reprovision Cloud Pc",
					"value": "Device Management Managed Devices Bulk Reprovision Cloud Pc",
					"action": "Invoke action bulkReprovisionCloudPc",
					"description": "Bulk reprovision a set of Cloud PC devices with Intune managed device IDs.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/microsoft.graph.bulkReprovisionCloudPc"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Bulk Restore Cloud Pc",
					"value": "Device Management Managed Devices Bulk Restore Cloud Pc",
					"action": "Invoke action bulkRestoreCloudPc",
					"description": "Restore multiple Cloud PC devices with a single request that includes the IDs of Intune managed devices and a restore point date and time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/microsoft.graph.bulkRestoreCloudPc"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Bulk Set Cloud Pc Review Status",
					"value": "Device Management Managed Devices Bulk Set Cloud Pc Review Status",
					"action": "Invoke action bulkSetCloudPcReviewStatus",
					"description": "Set the review status of multiple Cloud PC devices with a single request that includes the IDs of Intune managed devices.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/microsoft.graph.bulkSetCloudPcReviewStatus"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Download App Diagnostics",
					"value": "Device Management Managed Devices Download App Diagnostics",
					"action": "Invoke action downloadAppDiagnostics",
					"description": "Invoke action downloadAppDiagnostics",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/microsoft.graph.downloadAppDiagnostics"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Execute Action",
					"value": "Device Management Managed Devices Execute Action",
					"action": "Invoke action executeAction",
					"description": "Invoke action executeAction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/microsoft.graph.executeAction"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Move Devices To OU",
					"value": "Device Management Managed Devices Move Devices To OU",
					"action": "Invoke action moveDevicesToOU",
					"description": "Invoke action moveDevicesToOU",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/microsoft.graph.moveDevicesToOU"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Log Collection Requests Device Log Collection Response Create Download URL",
					"value": "Device Management Managed Devices Managed Device Log Collection Requests Device Log Collection Response Create Download URL",
					"action": "Invoke action createDownloadUrl",
					"description": "Invoke action createDownloadUrl",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests/{{$parameter[\"deviceLogCollectionResponse-id\"]}}/microsoft.graph.createDownloadUrl"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Activate Device Esim",
					"value": "Device Management Managed Devices Managed Device Activate Device Esim",
					"action": "Invoke action activateDeviceEsim",
					"description": "Activate eSIM on the device.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.activateDeviceEsim"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Bypass Activation Lock",
					"value": "Device Management Managed Devices Managed Device Bypass Activation Lock",
					"action": "Invoke action bypassActivationLock",
					"description": "Bypass activation lock",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.bypassActivationLock"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Clean Windows Device",
					"value": "Device Management Managed Devices Managed Device Clean Windows Device",
					"action": "Invoke action cleanWindowsDevice",
					"description": "Clean Windows device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.cleanWindowsDevice"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Create Device Log Collection Request",
					"value": "Device Management Managed Devices Managed Device Create Device Log Collection Request",
					"action": "Invoke action createDeviceLogCollectionRequest",
					"description": "Invoke action createDeviceLogCollectionRequest",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.createDeviceLogCollectionRequest"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Create Remote Help Session",
					"value": "Device Management Managed Devices Managed Device Create Remote Help Session",
					"action": "Invoke action createRemoteHelpSession",
					"description": "Remote help - Create session with a specific device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.createRemoteHelpSession"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Delete User From Shared Apple Device",
					"value": "Device Management Managed Devices Managed Device Delete User From Shared Apple Device",
					"action": "Invoke action deleteUserFromSharedAppleDevice",
					"description": "Delete user from shared Apple device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.deleteUserFromSharedAppleDevice"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Deprovision",
					"value": "Device Management Managed Devices Managed Device Deprovision",
					"action": "Invoke action deprovision",
					"description": "Invoke action deprovision",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.deprovision"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Disable",
					"value": "Device Management Managed Devices Managed Device Disable",
					"action": "Invoke action disable",
					"description": "Invoke action disable",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.disable"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Disable Lost Mode",
					"value": "Device Management Managed Devices Managed Device Disable Lost Mode",
					"action": "Invoke action disableLostMode",
					"description": "Disable lost mode",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.disableLostMode"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Enable Lost Mode",
					"value": "Device Management Managed Devices Managed Device Enable Lost Mode",
					"action": "Invoke action enableLostMode",
					"description": "Enable lost mode",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.enableLostMode"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device End Remote Help Session",
					"value": "Device Management Managed Devices Managed Device End Remote Help Session",
					"action": "Invoke action endRemoteHelpSession",
					"description": "Remote help - End ACS session, Pubsub session and delete Remote help session",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.endRemoteHelpSession"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Enroll Now Action",
					"value": "Device Management Managed Devices Managed Device Enroll Now Action",
					"action": "Invoke action enrollNowAction",
					"description": "Trigger comanagement enrollment action on ConfigurationManager client",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.enrollNowAction"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Initiate Mobile Device Management Key Recovery",
					"value": "Device Management Managed Devices Managed Device Initiate Mobile Device Management Key Recovery",
					"action": "Invoke action initiateMobileDeviceManagementKeyRecovery",
					"description": "Perform MDM key recovery and TPM attestation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.initiateMobileDeviceManagementKeyRecovery"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Initiate On Demand Proactive Remediation",
					"value": "Device Management Managed Devices Managed Device Initiate On Demand Proactive Remediation",
					"action": "Invoke action initiateOnDemandProactiveRemediation",
					"description": "Perform On Demand Proactive Remediation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.initiateOnDemandProactiveRemediation"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Locate Device",
					"value": "Device Management Managed Devices Managed Device Locate Device",
					"action": "Invoke action locateDevice",
					"description": "Locate a device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.locateDevice"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Logout Shared Apple Device Active User",
					"value": "Device Management Managed Devices Managed Device Logout Shared Apple Device Active User",
					"action": "Invoke action logoutSharedAppleDeviceActiveUser",
					"description": "Logout shared Apple device active user",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.logoutSharedAppleDeviceActiveUser"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Override Compliance State",
					"value": "Device Management Managed Devices Managed Device Override Compliance State",
					"action": "Invoke action overrideComplianceState",
					"description": "Invoke action overrideComplianceState",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.overrideComplianceState"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Play Lost Mode Sound",
					"value": "Device Management Managed Devices Managed Device Play Lost Mode Sound",
					"action": "Invoke action playLostModeSound",
					"description": "Play lost mode sound",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.playLostModeSound"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Reboot Now",
					"value": "Device Management Managed Devices Managed Device Reboot Now",
					"action": "Invoke action rebootNow",
					"description": "Reboot device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.rebootNow"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Recover Passcode",
					"value": "Device Management Managed Devices Managed Device Recover Passcode",
					"action": "Invoke action recoverPasscode",
					"description": "Recover passcode",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.recoverPasscode"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Reenable",
					"value": "Device Management Managed Devices Managed Device Reenable",
					"action": "Invoke action reenable",
					"description": "Invoke action reenable",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.reenable"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Remote Lock",
					"value": "Device Management Managed Devices Managed Device Remote Lock",
					"action": "Invoke action remoteLock",
					"description": "Remote lock",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.remoteLock"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Remove Device Firmware Configuration Interface Management",
					"value": "Device Management Managed Devices Managed Device Remove Device Firmware Configuration Interface Management",
					"action": "Invoke action removeDeviceFirmwareConfigurationInterfaceManagement",
					"description": "Remove device from Device Firmware Configuration Interface management",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.removeDeviceFirmwareConfigurationInterfaceManagement"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Reprovision Cloud Pc",
					"value": "Device Management Managed Devices Managed Device Reprovision Cloud Pc",
					"action": "Invoke action reprovisionCloudPc",
					"description": "Reprovision a Cloud PC with an Intune managed device ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.reprovisionCloudPc"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Request Remote Assistance",
					"value": "Device Management Managed Devices Managed Device Request Remote Assistance",
					"action": "Invoke action requestRemoteAssistance",
					"description": "Request remote assistance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.requestRemoteAssistance"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Request Remote Help Session Access",
					"value": "Device Management Managed Devices Managed Device Request Remote Help Session Access",
					"action": "Invoke action requestRemoteHelpSessionAccess",
					"description": "Remote help - Request Remote help session access permission for an existing session",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.requestRemoteHelpSessionAccess"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Reset Passcode",
					"value": "Device Management Managed Devices Managed Device Reset Passcode",
					"action": "Invoke action resetPasscode",
					"description": "Reset passcode",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.resetPasscode"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Resize Cloud Pc",
					"value": "Device Management Managed Devices Managed Device Resize Cloud Pc",
					"action": "Invoke action resizeCloudPc",
					"description": "Upgrade or downgrade an existing Cloud PC to another configuration with a new virtual CPU (vCPU) and storage size.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.resizeCloudPc"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Restore Cloud Pc",
					"value": "Device Management Managed Devices Managed Device Restore Cloud Pc",
					"action": "Invoke action restoreCloudPc",
					"description": "Restore a Cloud PC device to a previous state with an Intune managed device ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.restoreCloudPc"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Retire",
					"value": "Device Management Managed Devices Managed Device Retire",
					"action": "Invoke action retire",
					"description": "Retire a device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.retire"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Revoke Apple Vpp Licenses",
					"value": "Device Management Managed Devices Managed Device Revoke Apple Vpp Licenses",
					"action": "Invoke action revokeAppleVppLicenses",
					"description": "Revoke all Apple Vpp licenses for a device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.revokeAppleVppLicenses"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Rotate Bit Locker Keys",
					"value": "Device Management Managed Devices Managed Device Rotate Bit Locker Keys",
					"action": "Invoke action rotateBitLockerKeys",
					"description": "Rotate BitLockerKeys",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.rotateBitLockerKeys"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Rotate File Vault Key",
					"value": "Device Management Managed Devices Managed Device Rotate File Vault Key",
					"action": "Invoke action rotateFileVaultKey",
					"description": "Invoke action rotateFileVaultKey",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.rotateFileVaultKey"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Send Custom Notification To Company Portal",
					"value": "Device Management Managed Devices Managed Device Send Custom Notification To Company Portal",
					"action": "Invoke action sendCustomNotificationToCompanyPortal",
					"description": "Invoke action sendCustomNotificationToCompanyPortal",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.sendCustomNotificationToCompanyPortal"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Set Cloud Pc Review Status",
					"value": "Device Management Managed Devices Managed Device Set Cloud Pc Review Status",
					"action": "Invoke action setCloudPcReviewStatus",
					"description": "Set the review status of a specific Cloud PC device. Use this API to set the review status of a Cloud PC to in review if you consider a Cloud PC as suspicious. After the review is completed, use this API again to set the Cloud PC back to a normal state.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.setCloudPcReviewStatus"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Set Device Name",
					"value": "Device Management Managed Devices Managed Device Set Device Name",
					"action": "Invoke action setDeviceName",
					"description": "Set device name of the device.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.setDeviceName"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Shut Down",
					"value": "Device Management Managed Devices Managed Device Shut Down",
					"action": "Invoke action shutDown",
					"description": "Shut down device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.shutDown"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Sync Device",
					"value": "Device Management Managed Devices Managed Device Sync Device",
					"action": "Invoke action syncDevice",
					"description": "Invoke action syncDevice",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.syncDevice"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Trigger Configuration Manager Action",
					"value": "Device Management Managed Devices Managed Device Trigger Configuration Manager Action",
					"action": "Invoke action triggerConfigurationManagerAction",
					"description": "Trigger action on ConfigurationManager client",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.triggerConfigurationManagerAction"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Update Windows Device Account",
					"value": "Device Management Managed Devices Managed Device Update Windows Device Account",
					"action": "Invoke action updateWindowsDeviceAccount",
					"description": "Invoke action updateWindowsDeviceAccount",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.updateWindowsDeviceAccount"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Windows Defender Scan",
					"value": "Device Management Managed Devices Managed Device Windows Defender Scan",
					"action": "Invoke action windowsDefenderScan",
					"description": "Invoke action windowsDefenderScan",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.windowsDefenderScan"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Windows Defender Update Signatures",
					"value": "Device Management Managed Devices Managed Device Windows Defender Update Signatures",
					"action": "Invoke action windowsDefenderUpdateSignatures",
					"description": "Invoke action windowsDefenderUpdateSignatures",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.windowsDefenderUpdateSignatures"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Managed Device Wipe",
					"value": "Device Management Managed Devices Managed Device Wipe",
					"action": "Invoke action wipe",
					"description": "Wipe a device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.wipe"
						}
					}
				},
				{
					"name": "Device Management Enable Android Device Administrator Enrollment",
					"value": "Device Management Enable Android Device Administrator Enrollment",
					"action": "Invoke action enableAndroidDeviceAdministratorEnrollment",
					"description": "Invoke action enableAndroidDeviceAdministratorEnrollment",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoft.graph.enableAndroidDeviceAdministratorEnrollment"
						}
					}
				},
				{
					"name": "Device Management Enable Legacy Pc Management",
					"value": "Device Management Enable Legacy Pc Management",
					"action": "Invoke action enableLegacyPcManagement",
					"description": "Invoke action enableLegacyPcManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoft.graph.enableLegacyPcManagement"
						}
					}
				},
				{
					"name": "Device Management Enable Unlicensed Adminstrators",
					"value": "Device Management Enable Unlicensed Adminstrators",
					"action": "Invoke action enableUnlicensedAdminstrators",
					"description": "Upon enabling, users assigned as administrators via Role Assignment Memberships will no longer require an assigned Intune license. You are limited to 350 unlicensed direct members for each AAD security group in a role assignment, but you can assign multiple AAD security groups to a role if you need to support more than 350 unlicensed administrators. Licensed administrators will continue to function as-is in that transitive memberships apply and are not subject to the 350 member limit.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoft.graph.enableUnlicensedAdminstrators"
						}
					}
				},
				{
					"name": "Device Management Evaluate Assignment Filter",
					"value": "Device Management Evaluate Assignment Filter",
					"action": "Invoke action evaluateAssignmentFilter",
					"description": "Invoke action evaluateAssignmentFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoft.graph.evaluateAssignmentFilter"
						}
					}
				},
				{
					"name": "Device Management Get Assignment Filters Status Details",
					"value": "Device Management Get Assignment Filters Status Details",
					"action": "Invoke action getAssignmentFiltersStatusDetails",
					"description": "Invoke action getAssignmentFiltersStatusDetails",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoft.graph.getAssignmentFiltersStatusDetails"
						}
					}
				},
				{
					"name": "Device Management Send Custom Notification To Company Portal",
					"value": "Device Management Send Custom Notification To Company Portal",
					"action": "Invoke action sendCustomNotificationToCompanyPortal",
					"description": "Invoke action sendCustomNotificationToCompanyPortal",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoft.graph.sendCustomNotificationToCompanyPortal"
						}
					}
				},
				{
					"name": "Device Management Microsoft Tunnel Server Log Collection Responses Microsoft Tunnel Server Log Collection Response Create Download URL",
					"value": "Device Management Microsoft Tunnel Server Log Collection Responses Microsoft Tunnel Server Log Collection Response Create Download URL",
					"action": "Invoke action createDownloadUrl",
					"description": "Invoke action createDownloadUrl",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoftTunnelServerLogCollectionResponses/{{$parameter[\"microsoftTunnelServerLogCollectionResponse-id\"]}}/microsoft.graph.createDownloadUrl"
						}
					}
				},
				{
					"name": "Device Management Microsoft Tunnel Server Log Collection Responses Microsoft Tunnel Server Log Collection Response Generate Download URL",
					"value": "Device Management Microsoft Tunnel Server Log Collection Responses Microsoft Tunnel Server Log Collection Response Generate Download URL",
					"action": "Invoke action generateDownloadUrl",
					"description": "Invoke action generateDownloadUrl",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoftTunnelServerLogCollectionResponses/{{$parameter[\"microsoftTunnelServerLogCollectionResponse-id\"]}}/microsoft.graph.generateDownloadUrl"
						}
					}
				},
				{
					"name": "Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Request Upgrade",
					"value": "Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Request Upgrade",
					"action": "Invoke action requestUpgrade",
					"description": "Invoke action requestUpgrade",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}/microsoft.graph.requestUpgrade"
						}
					}
				},
				{
					"name": "Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Create Server Log Collection Request",
					"value": "Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Create Server Log Collection Request",
					"action": "Invoke action createServerLogCollectionRequest",
					"description": "Invoke action createServerLogCollectionRequest",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}/microsoftTunnelServers/{{$parameter[\"microsoftTunnelServer-id\"]}}/microsoft.graph.createServerLogCollectionRequest"
						}
					}
				},
				{
					"name": "Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Generate Server Log Collection Request",
					"value": "Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Generate Server Log Collection Request",
					"action": "Invoke action generateServerLogCollectionRequest",
					"description": "Invoke action generateServerLogCollectionRequest",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}/microsoftTunnelServers/{{$parameter[\"microsoftTunnelServer-id\"]}}/microsoft.graph.generateServerLogCollectionRequest"
						}
					}
				},
				{
					"name": "Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Get Health Metric Time Series",
					"value": "Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Get Health Metric Time Series",
					"action": "Invoke action getHealthMetricTimeSeries",
					"description": "Invoke action getHealthMetricTimeSeries",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}/microsoftTunnelServers/{{$parameter[\"microsoftTunnelServer-id\"]}}/microsoft.graph.getHealthMetricTimeSeries"
						}
					}
				},
				{
					"name": "Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Get Health Metrics",
					"value": "Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Get Health Metrics",
					"action": "Invoke action getHealthMetrics",
					"description": "Invoke action getHealthMetrics",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/microsoftTunnelSites/{{$parameter[\"microsoftTunnelSite-id\"]}}/microsoftTunnelServers/{{$parameter[\"microsoftTunnelServer-id\"]}}/microsoft.graph.getHealthMetrics"
						}
					}
				},
				{
					"name": "Device Management Mobile App Troubleshooting Events Mobile App Troubleshooting Event App Log Collection Requests App Log Collection Request Create Download URL",
					"value": "Device Management Mobile App Troubleshooting Events Mobile App Troubleshooting Event App Log Collection Requests App Log Collection Request Create Download URL",
					"action": "Invoke action createDownloadUrl",
					"description": "Invoke action createDownloadUrl",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests/{{$parameter[\"appLogCollectionRequest-id\"]}}/microsoft.graph.createDownloadUrl"
						}
					}
				},
				{
					"name": "Device Management Monitoring Alert Records Alert Record Set Portal Notification As Sent",
					"value": "Device Management Monitoring Alert Records Alert Record Set Portal Notification As Sent",
					"action": "Invoke action setPortalNotificationAsSent",
					"description": "Set the status of the notification associated with the specified alertRecord on the Microsoft EndPoint Manager admin center as sent, by setting the **isPortalNotificationSent** property of the portal notification to `true`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/monitoring/alertRecords/{{$parameter[\"alertRecord-id\"]}}/microsoft.graph.deviceManagement.setPortalNotificationAsSent"
						}
					}
				},
				{
					"name": "Device Management Notification Message Templates Notification Message Template Send Test Message",
					"value": "Device Management Notification Message Templates Notification Message Template Send Test Message",
					"action": "Invoke action sendTestMessage",
					"description": "Sends test message using the specified notificationMessageTemplate in the default locale",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/notificationMessageTemplates/{{$parameter[\"notificationMessageTemplate-id\"]}}/microsoft.graph.sendTestMessage"
						}
					}
				},
				{
					"name": "Device Management Oem Warranty Information Onboarding Oem Warranty Information Onboarding Disable",
					"value": "Device Management Oem Warranty Information Onboarding Oem Warranty Information Onboarding Disable",
					"action": "Invoke action disable",
					"description": "Invoke action disable",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/oemWarrantyInformationOnboarding/{{$parameter[\"oemWarrantyInformationOnboarding-id\"]}}/microsoft.graph.disable"
						}
					}
				},
				{
					"name": "Device Management Oem Warranty Information Onboarding Oem Warranty Information Onboarding Enable",
					"value": "Device Management Oem Warranty Information Onboarding Oem Warranty Information Onboarding Enable",
					"action": "Invoke action enable",
					"description": "Invoke action enable",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/oemWarrantyInformationOnboarding/{{$parameter[\"oemWarrantyInformationOnboarding-id\"]}}/microsoft.graph.enable"
						}
					}
				},
				{
					"name": "Device Management Remote Assistance Partners Remote Assistance Partner Begin Onboarding",
					"value": "Device Management Remote Assistance Partners Remote Assistance Partner Begin Onboarding",
					"action": "Invoke action beginOnboarding",
					"description": "A request to start onboarding.  Must be coupled with the appropriate TeamViewer account information",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/remoteAssistancePartners/{{$parameter[\"remoteAssistancePartner-id\"]}}/microsoft.graph.beginOnboarding"
						}
					}
				},
				{
					"name": "Device Management Remote Assistance Partners Remote Assistance Partner Disconnect",
					"value": "Device Management Remote Assistance Partners Remote Assistance Partner Disconnect",
					"action": "Invoke action disconnect",
					"description": "A request to remove the active TeamViewer connector",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/remoteAssistancePartners/{{$parameter[\"remoteAssistancePartner-id\"]}}/microsoft.graph.disconnect"
						}
					}
				},
				{
					"name": "Device Management Reports Get Active Malware Report",
					"value": "Device Management Reports Get Active Malware Report",
					"action": "Invoke action getActiveMalwareReport",
					"description": "Invoke action getActiveMalwareReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getActiveMalwareReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Active Malware Summary Report",
					"value": "Device Management Reports Get Active Malware Summary Report",
					"action": "Invoke action getActiveMalwareSummaryReport",
					"description": "Invoke action getActiveMalwareSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getActiveMalwareSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get All Certificates Report",
					"value": "Device Management Reports Get All Certificates Report",
					"action": "Invoke action getAllCertificatesReport",
					"description": "Invoke action getAllCertificatesReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getAllCertificatesReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get App Status Overview Report",
					"value": "Device Management Reports Get App Status Overview Report",
					"action": "Invoke action getAppStatusOverviewReport",
					"description": "Invoke action getAppStatusOverviewReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getAppStatusOverviewReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Apps Install Summary Report",
					"value": "Device Management Reports Get Apps Install Summary Report",
					"action": "Invoke action getAppsInstallSummaryReport",
					"description": "Invoke action getAppsInstallSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getAppsInstallSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Cached Report",
					"value": "Device Management Reports Get Cached Report",
					"action": "Invoke action getCachedReport",
					"description": "Invoke action getCachedReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getCachedReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Certificates Report",
					"value": "Device Management Reports Get Certificates Report",
					"action": "Invoke action getCertificatesReport",
					"description": "Invoke action getCertificatesReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getCertificatesReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Compliance Policies Report For Device",
					"value": "Device Management Reports Get Compliance Policies Report For Device",
					"action": "Invoke action getCompliancePoliciesReportForDevice",
					"description": "Invoke action getCompliancePoliciesReportForDevice",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getCompliancePoliciesReportForDevice"
						}
					}
				},
				{
					"name": "Device Management Reports Get Compliance Policy Device Summary Report",
					"value": "Device Management Reports Get Compliance Policy Device Summary Report",
					"action": "Invoke action getCompliancePolicyDeviceSummaryReport",
					"description": "Invoke action getCompliancePolicyDeviceSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getCompliancePolicyDeviceSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Compliance Policy Devices Report",
					"value": "Device Management Reports Get Compliance Policy Devices Report",
					"action": "Invoke action getCompliancePolicyDevicesReport",
					"description": "Invoke action getCompliancePolicyDevicesReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getCompliancePolicyDevicesReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Compliance Policy Non Compliance Report",
					"value": "Device Management Reports Get Compliance Policy Non Compliance Report",
					"action": "Invoke action getCompliancePolicyNonComplianceReport",
					"description": "Invoke action getCompliancePolicyNonComplianceReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getCompliancePolicyNonComplianceReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Compliance Policy Non Compliance Summary Report",
					"value": "Device Management Reports Get Compliance Policy Non Compliance Summary Report",
					"action": "Invoke action getCompliancePolicyNonComplianceSummaryReport",
					"description": "Invoke action getCompliancePolicyNonComplianceSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getCompliancePolicyNonComplianceSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Compliance Setting Details Report",
					"value": "Device Management Reports Get Compliance Setting Details Report",
					"action": "Invoke action getComplianceSettingDetailsReport",
					"description": "Invoke action getComplianceSettingDetailsReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getComplianceSettingDetailsReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Compliance Setting Non Compliance Report",
					"value": "Device Management Reports Get Compliance Setting Non Compliance Report",
					"action": "Invoke action getComplianceSettingNonComplianceReport",
					"description": "Invoke action getComplianceSettingNonComplianceReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getComplianceSettingNonComplianceReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Compliance Settings Report",
					"value": "Device Management Reports Get Compliance Settings Report",
					"action": "Invoke action getComplianceSettingsReport",
					"description": "Invoke action getComplianceSettingsReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getComplianceSettingsReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Config Manager Device Policy Status Report",
					"value": "Device Management Reports Get Config Manager Device Policy Status Report",
					"action": "Invoke action getConfigManagerDevicePolicyStatusReport",
					"description": "Invoke action getConfigManagerDevicePolicyStatusReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getConfigManagerDevicePolicyStatusReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Configuration Policies Report For Device",
					"value": "Device Management Reports Get Configuration Policies Report For Device",
					"action": "Invoke action getConfigurationPoliciesReportForDevice",
					"description": "Invoke action getConfigurationPoliciesReportForDevice",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getConfigurationPoliciesReportForDevice"
						}
					}
				},
				{
					"name": "Device Management Reports Get Configuration Policy Device Summary Report",
					"value": "Device Management Reports Get Configuration Policy Device Summary Report",
					"action": "Invoke action getConfigurationPolicyDeviceSummaryReport",
					"description": "Invoke action getConfigurationPolicyDeviceSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getConfigurationPolicyDeviceSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Configuration Policy Devices Report",
					"value": "Device Management Reports Get Configuration Policy Devices Report",
					"action": "Invoke action getConfigurationPolicyDevicesReport",
					"description": "Invoke action getConfigurationPolicyDevicesReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getConfigurationPolicyDevicesReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Configuration Policy Non Compliance Report",
					"value": "Device Management Reports Get Configuration Policy Non Compliance Report",
					"action": "Invoke action getConfigurationPolicyNonComplianceReport",
					"description": "Invoke action getConfigurationPolicyNonComplianceReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getConfigurationPolicyNonComplianceReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Configuration Policy Non Compliance Summary Report",
					"value": "Device Management Reports Get Configuration Policy Non Compliance Summary Report",
					"action": "Invoke action getConfigurationPolicyNonComplianceSummaryReport",
					"description": "Invoke action getConfigurationPolicyNonComplianceSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getConfigurationPolicyNonComplianceSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Configuration Policy Settings Device Summary Report",
					"value": "Device Management Reports Get Configuration Policy Settings Device Summary Report",
					"action": "Invoke action getConfigurationPolicySettingsDeviceSummaryReport",
					"description": "Invoke action getConfigurationPolicySettingsDeviceSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getConfigurationPolicySettingsDeviceSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Configuration Setting Details Report",
					"value": "Device Management Reports Get Configuration Setting Details Report",
					"action": "Invoke action getConfigurationSettingDetailsReport",
					"description": "Invoke action getConfigurationSettingDetailsReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getConfigurationSettingDetailsReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Configuration Setting Non Compliance Report",
					"value": "Device Management Reports Get Configuration Setting Non Compliance Report",
					"action": "Invoke action getConfigurationSettingNonComplianceReport",
					"description": "Invoke action getConfigurationSettingNonComplianceReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getConfigurationSettingNonComplianceReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Configuration Settings Report",
					"value": "Device Management Reports Get Configuration Settings Report",
					"action": "Invoke action getConfigurationSettingsReport",
					"description": "Invoke action getConfigurationSettingsReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getConfigurationSettingsReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Device Configuration Policy Settings Summary Report",
					"value": "Device Management Reports Get Device Configuration Policy Settings Summary Report",
					"action": "Invoke action getDeviceConfigurationPolicySettingsSummaryReport",
					"description": "Invoke action getDeviceConfigurationPolicySettingsSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getDeviceConfigurationPolicySettingsSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Device Configuration Policy Status Summary",
					"value": "Device Management Reports Get Device Configuration Policy Status Summary",
					"action": "Invoke action getDeviceConfigurationPolicyStatusSummary",
					"description": "Invoke action getDeviceConfigurationPolicyStatusSummary",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getDeviceConfigurationPolicyStatusSummary"
						}
					}
				},
				{
					"name": "Device Management Reports Get Device Install Status Report",
					"value": "Device Management Reports Get Device Install Status Report",
					"action": "Invoke action getDeviceInstallStatusReport",
					"description": "Invoke action getDeviceInstallStatusReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getDeviceInstallStatusReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Device Management Intent Per Setting Contributing Profiles",
					"value": "Device Management Reports Get Device Management Intent Per Setting Contributing Profiles",
					"action": "Invoke action getDeviceManagementIntentPerSettingContributingProfiles",
					"description": "Invoke action getDeviceManagementIntentPerSettingContributingProfiles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getDeviceManagementIntentPerSettingContributingProfiles"
						}
					}
				},
				{
					"name": "Device Management Reports Get Device Management Intent Settings Report",
					"value": "Device Management Reports Get Device Management Intent Settings Report",
					"action": "Invoke action getDeviceManagementIntentSettingsReport",
					"description": "Invoke action getDeviceManagementIntentSettingsReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getDeviceManagementIntentSettingsReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Device Non Compliance Report",
					"value": "Device Management Reports Get Device Non Compliance Report",
					"action": "Invoke action getDeviceNonComplianceReport",
					"description": "Invoke action getDeviceNonComplianceReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getDeviceNonComplianceReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Devices Without Compliance Policy Report",
					"value": "Device Management Reports Get Devices Without Compliance Policy Report",
					"action": "Invoke action getDevicesWithoutCompliancePolicyReport",
					"description": "Invoke action getDevicesWithoutCompliancePolicyReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getDevicesWithoutCompliancePolicyReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Encryption Report For Devices",
					"value": "Device Management Reports Get Encryption Report For Devices",
					"action": "Invoke action getEncryptionReportForDevices",
					"description": "Invoke action getEncryptionReportForDevices",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getEncryptionReportForDevices"
						}
					}
				},
				{
					"name": "Device Management Reports Get Enrollment Configuration Policies By Device",
					"value": "Device Management Reports Get Enrollment Configuration Policies By Device",
					"action": "Invoke action getEnrollmentConfigurationPoliciesByDevice",
					"description": "Invoke action getEnrollmentConfigurationPoliciesByDevice",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getEnrollmentConfigurationPoliciesByDevice"
						}
					}
				},
				{
					"name": "Device Management Reports Get Failed Mobile Apps Report",
					"value": "Device Management Reports Get Failed Mobile Apps Report",
					"action": "Invoke action getFailedMobileAppsReport",
					"description": "Invoke action getFailedMobileAppsReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getFailedMobileAppsReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Failed Mobile Apps Summary Report",
					"value": "Device Management Reports Get Failed Mobile Apps Summary Report",
					"action": "Invoke action getFailedMobileAppsSummaryReport",
					"description": "Invoke action getFailedMobileAppsSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getFailedMobileAppsSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Group Policy Settings Device Settings Report",
					"value": "Device Management Reports Get Group Policy Settings Device Settings Report",
					"action": "Invoke action getGroupPolicySettingsDeviceSettingsReport",
					"description": "Invoke action getGroupPolicySettingsDeviceSettingsReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getGroupPolicySettingsDeviceSettingsReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Historical Report",
					"value": "Device Management Reports Get Historical Report",
					"action": "Invoke action getHistoricalReport",
					"description": "Invoke action getHistoricalReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getHistoricalReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Malware Summary Report",
					"value": "Device Management Reports Get Malware Summary Report",
					"action": "Invoke action getMalwareSummaryReport",
					"description": "Invoke action getMalwareSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getMalwareSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Mobile Application Management App Configuration Report",
					"value": "Device Management Reports Get Mobile Application Management App Configuration Report",
					"action": "Invoke action getMobileApplicationManagementAppConfigurationReport",
					"description": "Invoke action getMobileApplicationManagementAppConfigurationReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getMobileApplicationManagementAppConfigurationReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Mobile Application Management App Registration Summary Report",
					"value": "Device Management Reports Get Mobile Application Management App Registration Summary Report",
					"action": "Invoke action getMobileApplicationManagementAppRegistrationSummaryReport",
					"description": "Invoke action getMobileApplicationManagementAppRegistrationSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getMobileApplicationManagementAppRegistrationSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Noncompliant Devices And Settings Report",
					"value": "Device Management Reports Get Noncompliant Devices And Settings Report",
					"action": "Invoke action getNoncompliantDevicesAndSettingsReport",
					"description": "Invoke action getNoncompliantDevicesAndSettingsReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getNoncompliantDevicesAndSettingsReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Policy Non Compliance Metadata",
					"value": "Device Management Reports Get Policy Non Compliance Metadata",
					"action": "Invoke action getPolicyNonComplianceMetadata",
					"description": "Invoke action getPolicyNonComplianceMetadata",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getPolicyNonComplianceMetadata"
						}
					}
				},
				{
					"name": "Device Management Reports Get Policy Non Compliance Report",
					"value": "Device Management Reports Get Policy Non Compliance Report",
					"action": "Invoke action getPolicyNonComplianceReport",
					"description": "Invoke action getPolicyNonComplianceReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getPolicyNonComplianceReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Policy Non Compliance Summary Report",
					"value": "Device Management Reports Get Policy Non Compliance Summary Report",
					"action": "Invoke action getPolicyNonComplianceSummaryReport",
					"description": "Invoke action getPolicyNonComplianceSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getPolicyNonComplianceSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Quiet Time Policy User Summary Report",
					"value": "Device Management Reports Get Quiet Time Policy User Summary Report",
					"action": "Invoke action getQuietTimePolicyUserSummaryReport",
					"description": "Invoke action getQuietTimePolicyUserSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getQuietTimePolicyUserSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Quiet Time Policy Users Report",
					"value": "Device Management Reports Get Quiet Time Policy Users Report",
					"action": "Invoke action getQuietTimePolicyUsersReport",
					"description": "Invoke action getQuietTimePolicyUsersReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getQuietTimePolicyUsersReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Related Apps Status Report",
					"value": "Device Management Reports Get Related Apps Status Report",
					"action": "Invoke action getRelatedAppsStatusReport",
					"description": "Invoke action getRelatedAppsStatusReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getRelatedAppsStatusReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Remote Assistance Sessions Report",
					"value": "Device Management Reports Get Remote Assistance Sessions Report",
					"action": "Invoke action getRemoteAssistanceSessionsReport",
					"description": "Invoke action getRemoteAssistanceSessionsReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getRemoteAssistanceSessionsReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Report Filters",
					"value": "Device Management Reports Get Report Filters",
					"action": "Invoke action getReportFilters",
					"description": "Invoke action getReportFilters",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getReportFilters"
						}
					}
				},
				{
					"name": "Device Management Reports Get Setting Non Compliance Report",
					"value": "Device Management Reports Get Setting Non Compliance Report",
					"action": "Invoke action getSettingNonComplianceReport",
					"description": "Invoke action getSettingNonComplianceReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getSettingNonComplianceReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Unhealthy Defender Agents Report",
					"value": "Device Management Reports Get Unhealthy Defender Agents Report",
					"action": "Invoke action getUnhealthyDefenderAgentsReport",
					"description": "Invoke action getUnhealthyDefenderAgentsReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getUnhealthyDefenderAgentsReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Unhealthy Firewall Report",
					"value": "Device Management Reports Get Unhealthy Firewall Report",
					"action": "Invoke action getUnhealthyFirewallReport",
					"description": "Invoke action getUnhealthyFirewallReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getUnhealthyFirewallReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Unhealthy Firewall Summary Report",
					"value": "Device Management Reports Get Unhealthy Firewall Summary Report",
					"action": "Invoke action getUnhealthyFirewallSummaryReport",
					"description": "Invoke action getUnhealthyFirewallSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getUnhealthyFirewallSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get User Install Status Report",
					"value": "Device Management Reports Get User Install Status Report",
					"action": "Invoke action getUserInstallStatusReport",
					"description": "Invoke action getUserInstallStatusReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getUserInstallStatusReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Windows Quality Update Alert Summary Report",
					"value": "Device Management Reports Get Windows Quality Update Alert Summary Report",
					"action": "Invoke action getWindowsQualityUpdateAlertSummaryReport",
					"description": "Invoke action getWindowsQualityUpdateAlertSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getWindowsQualityUpdateAlertSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Windows Quality Update Alerts Per Policy Per Device Report",
					"value": "Device Management Reports Get Windows Quality Update Alerts Per Policy Per Device Report",
					"action": "Invoke action getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport",
					"description": "Invoke action getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Windows Update Alert Summary Report",
					"value": "Device Management Reports Get Windows Update Alert Summary Report",
					"action": "Invoke action getWindowsUpdateAlertSummaryReport",
					"description": "Invoke action getWindowsUpdateAlertSummaryReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getWindowsUpdateAlertSummaryReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Windows Update Alerts Per Policy Per Device Report",
					"value": "Device Management Reports Get Windows Update Alerts Per Policy Per Device Report",
					"action": "Invoke action getWindowsUpdateAlertsPerPolicyPerDeviceReport",
					"description": "Invoke action getWindowsUpdateAlertsPerPolicyPerDeviceReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getWindowsUpdateAlertsPerPolicyPerDeviceReport"
						}
					}
				},
				{
					"name": "Device Management Reports Get Zebra Fota Deployment Report",
					"value": "Device Management Reports Get Zebra Fota Deployment Report",
					"action": "Invoke action getZebraFotaDeploymentReport",
					"description": "Invoke action getZebraFotaDeploymentReport",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reports/microsoft.graph.getZebraFotaDeploymentReport"
						}
					}
				},
				{
					"name": "Device Management Resource Access Profiles Query By Platform Type",
					"value": "Device Management Resource Access Profiles Query By Platform Type",
					"action": "Invoke action queryByPlatformType",
					"description": "Invoke action queryByPlatformType",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/resourceAccessProfiles/microsoft.graph.queryByPlatformType"
						}
					}
				},
				{
					"name": "Device Management Resource Access Profiles Device Management Resource Access Profile Base Assign",
					"value": "Device Management Resource Access Profiles Device Management Resource Access Profile Base Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/resourceAccessProfiles/{{$parameter[\"deviceManagementResourceAccessProfileBase-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Device Management Reusable Policy Setting Clone",
					"value": "Device Management Reusable Policy Settings Device Management Reusable Policy Setting Clone",
					"action": "Invoke action clone",
					"description": "Invoke action clone",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/microsoft.graph.clone"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Device Management Reusable Policy Setting Referencing Configuration Policies Device Management Configuration Policy Assign",
					"value": "Device Management Reusable Policy Settings Device Management Reusable Policy Setting Referencing Configuration Policies Device Management Configuration Policy Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Device Management Reusable Policy Setting Referencing Configuration Policies Device Management Configuration Policy Create Copy",
					"value": "Device Management Reusable Policy Settings Device Management Reusable Policy Setting Referencing Configuration Policies Device Management Configuration Policy Create Copy",
					"action": "Invoke action createCopy",
					"description": "Invoke action createCopy",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/microsoft.graph.createCopy"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Device Management Reusable Policy Setting Referencing Configuration Policies Device Management Configuration Policy Reorder",
					"value": "Device Management Reusable Policy Settings Device Management Reusable Policy Setting Referencing Configuration Policies Device Management Configuration Policy Reorder",
					"action": "Invoke action reorder",
					"description": "Invoke action reorder",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/microsoft.graph.reorder"
						}
					}
				},
				{
					"name": "Device Management Role Scope Tags Get Role Scope Tags By ID",
					"value": "Device Management Role Scope Tags Get Role Scope Tags By ID",
					"action": "Invoke action getRoleScopeTagsById",
					"description": "Invoke action getRoleScopeTagsById",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/roleScopeTags/microsoft.graph.getRoleScopeTagsById"
						}
					}
				},
				{
					"name": "Device Management Role Scope Tags Role Scope Tag Assign",
					"value": "Device Management Role Scope Tags Role Scope Tag Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/roleScopeTags/{{$parameter[\"roleScopeTag-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Templates Import Office 365 Device Configuration Policies",
					"value": "Device Management Templates Import Office 365 Device Configuration Policies",
					"action": "Invoke action importOffice365DeviceConfigurationPolicies",
					"description": "Invoke action importOffice365DeviceConfigurationPolicies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/templates/microsoft.graph.importOffice365DeviceConfigurationPolicies"
						}
					}
				},
				{
					"name": "Device Management Templates Device Management Template Create Instance",
					"value": "Device Management Templates Device Management Template Create Instance",
					"action": "Invoke action createInstance",
					"description": "Invoke action createInstance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/microsoft.graph.createInstance"
						}
					}
				},
				{
					"name": "Device Management Templates Device Management Template Migratable To Import Office 365 Device Configuration Policies",
					"value": "Device Management Templates Device Management Template Migratable To Import Office 365 Device Configuration Policies",
					"action": "Invoke action importOffice365DeviceConfigurationPolicies",
					"description": "Invoke action importOffice365DeviceConfigurationPolicies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/microsoft.graph.importOffice365DeviceConfigurationPolicies"
						}
					}
				},
				{
					"name": "Device Management Templates Device Management Template Migratable To Device Management Template Create Instance",
					"value": "Device Management Templates Device Management Template Migratable To Device Management Template Create Instance",
					"action": "Invoke action createInstance",
					"description": "Invoke action createInstance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/microsoft.graph.createInstance"
						}
					}
				},
				{
					"name": "Device Management Tenant Attach RBAC Enable",
					"value": "Device Management Tenant Attach RBAC Enable",
					"action": "Invoke action enable",
					"description": "Invoke action enable",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/tenantAttachRBAC/microsoft.graph.enable"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Device Scope Trigger Device Scope Action",
					"value": "Device Management User Experience Analytics Device Scope Trigger Device Scope Action",
					"action": "Invoke action triggerDeviceScopeAction",
					"description": "Invoke action triggerDeviceScopeAction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceScope/microsoft.graph.triggerDeviceScopeAction"
						}
					}
				},
				{
					"name": "Device Management User Experience Analytics Device Scopes User Experience Analytics Device Scope Trigger Device Scope Action",
					"value": "Device Management User Experience Analytics Device Scopes User Experience Analytics Device Scope Trigger Device Scope Action",
					"action": "Invoke action triggerDeviceScopeAction",
					"description": "Invoke action triggerDeviceScopeAction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userExperienceAnalyticsDeviceScopes/{{$parameter[\"userExperienceAnalyticsDeviceScope-id\"]}}/microsoft.graph.triggerDeviceScopeAction"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Change User Account Type",
					"value": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Change User Account Type",
					"action": "Invoke action changeUserAccountType",
					"description": "Change the account type of the user on a specific Cloud PC.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.changeUserAccountType"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Cloud P Cs Cloud PC End Grace Period",
					"value": "Device Management Virtual Endpoint Cloud P Cs Cloud PC End Grace Period",
					"action": "Invoke action endGracePeriod",
					"description": "End the grace period for a specific Cloud PC. The grace period is triggered when the Cloud PC license is removed or the provisioning policy is unassigned. It allows users to access Cloud PCs for up to seven days before de-provisioning occurs. Ending the grace period immediately deprovisions the Cloud PC without waiting the seven days.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.endGracePeriod"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Reboot",
					"value": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Reboot",
					"action": "Invoke action reboot",
					"description": "Reboot a specific Cloud PC.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.reboot"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Rename",
					"value": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Rename",
					"action": "Invoke action rename",
					"description": "Rename a specific Cloud PC. Use this API to update the **displayName** for the Cloud PC entity.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.rename"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Reprovision",
					"value": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Reprovision",
					"action": "Invoke action reprovision",
					"description": "Reprovision a specific Cloud PC.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.reprovision"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Restore",
					"value": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Restore",
					"action": "Invoke action restore",
					"description": "Restore a specific Cloud PC. Use this API to trigger a remote action that restores a Cloud PC device to a previous state.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.restore"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Retry Partner Agent Installation",
					"value": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Retry Partner Agent Installation",
					"action": "Invoke action retryPartnerAgentInstallation",
					"description": "Retry installation for the partner agents which failed to install on the Cloud PC. Service side will check which agent installation failed firstly and retry.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.retryPartnerAgentInstallation"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Troubleshoot",
					"value": "Device Management Virtual Endpoint Cloud P Cs Cloud PC Troubleshoot",
					"action": "Invoke action troubleshoot",
					"description": "Troubleshoot a specific Cloud PC. Use this API to check the health status of the Cloud PC and the session host.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.troubleshoot"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Device Images Cloud Pc Device Image Reupload",
					"value": "Device Management Virtual Endpoint Device Images Cloud Pc Device Image Reupload",
					"action": "Invoke action reupload",
					"description": "Reupload a cloudPcDeviceImage object that failed to upload.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/deviceImages/{{$parameter[\"cloudPcDeviceImage-id\"]}}/microsoft.graph.reupload"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint On Premises Connections Cloud Pc On Premises Connection Run Health Checks",
					"value": "Device Management Virtual Endpoint On Premises Connections Cloud Pc On Premises Connection Run Health Checks",
					"action": "Invoke action runHealthChecks",
					"description": "Run health checks on the cloudPcOnPremisesConnection object. This will trigger a new health check for this cloudPcOnPremisesConnection object and change the healthCheckStatus and healthCheckStatusDetails properties when check finished.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/onPremisesConnections/{{$parameter[\"cloudPcOnPremisesConnection-id\"]}}/microsoft.graph.runHealthChecks"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint On Premises Connections Cloud Pc On Premises Connection Update Ad Domain Password",
					"value": "Device Management Virtual Endpoint On Premises Connections Cloud Pc On Premises Connection Update Ad Domain Password",
					"action": "Invoke action updateAdDomainPassword",
					"description": "Update the Active Directory domain password for a cloudPcOnPremisesConnection object. This API is supported when the type of the **cloudPcOnPremisesConnection** object is `hybridAzureADJoin`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/onPremisesConnections/{{$parameter[\"cloudPcOnPremisesConnection-id\"]}}/microsoft.graph.updateAdDomainPassword"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Provisioning Policies Cloud Pc Provisioning Policy Assign",
					"value": "Device Management Virtual Endpoint Provisioning Policies Cloud Pc Provisioning Policy Assign",
					"action": "Invoke action assign",
					"description": "Assign cloudPcProvisioningPolicy to user groups.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/provisioningPolicies/{{$parameter[\"cloudPcProvisioningPolicy-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Reports Get Daily Aggregated Remote Connection Reports",
					"value": "Device Management Virtual Endpoint Reports Get Daily Aggregated Remote Connection Reports",
					"action": "Invoke action getDailyAggregatedRemoteConnectionReports",
					"description": "Get the daily aggregated remote connection reports, such as round trip time, available bandwidth, and so on, in a given period.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/reports/microsoft.graph.getDailyAggregatedRemoteConnectionReports"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Reports Get Remote Connection Historical Reports",
					"value": "Device Management Virtual Endpoint Reports Get Remote Connection Historical Reports",
					"action": "Invoke action getRemoteConnectionHistoricalReports",
					"description": "Get the remote connection history records of a Cloud PC during a given period.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/reports/microsoft.graph.getRemoteConnectionHistoricalReports"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Reports Get Shared Use License Usage Report",
					"value": "Device Management Virtual Endpoint Reports Get Shared Use License Usage Report",
					"action": "Invoke action getSharedUseLicenseUsageReport",
					"description": "Get a usage report on shared-use licenses, such as **servicePlanId**, **licenseCount**, and **claimedLicenseCount**, for real-time, 7 days, or 28 days trend.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/reports/microsoft.graph.getSharedUseLicenseUsageReport"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint Reports Get Total Aggregated Remote Connection Reports",
					"value": "Device Management Virtual Endpoint Reports Get Total Aggregated Remote Connection Reports",
					"action": "Invoke action getTotalAggregatedRemoteConnectionReports",
					"description": "Get the total aggregated remote connection usage of a Cloud PC during a given time span.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/reports/microsoft.graph.getTotalAggregatedRemoteConnectionReports"
						}
					}
				},
				{
					"name": "Device Management Virtual Endpoint User Settings Cloud Pc User Setting Assign",
					"value": "Device Management Virtual Endpoint User Settings Cloud Pc User Setting Assign",
					"action": "Invoke action assign",
					"description": "Assign a cloudPcUserSetting to user groups.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/virtualEndpoint/userSettings/{{$parameter[\"cloudPcUserSetting-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Has Payload Links",
					"value": "Device Management Windows Autopilot Deployment Profiles Has Payload Links",
					"action": "Invoke action hasPayloadLinks",
					"description": "Invoke action hasPayloadLinks",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/microsoft.graph.hasPayloadLinks"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Assign Resource Account To Device",
					"value": "Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Assign Resource Account To Device",
					"action": "Invoke action assignResourceAccountToDevice",
					"description": "Assigns resource account to Autopilot devices.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignedDevices/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}/microsoft.graph.assignResourceAccountToDevice"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Assign User To Device",
					"value": "Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Assign User To Device",
					"action": "Invoke action assignUserToDevice",
					"description": "Assigns user to Autopilot devices.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignedDevices/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}/microsoft.graph.assignUserToDevice"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Unassign Resource Account From Device",
					"value": "Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Unassign Resource Account From Device",
					"action": "Invoke action unassignResourceAccountFromDevice",
					"description": "Unassigns the resource account from an Autopilot device.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignedDevices/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}/microsoft.graph.unassignResourceAccountFromDevice"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Unassign User From Device",
					"value": "Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Unassign User From Device",
					"action": "Invoke action unassignUserFromDevice",
					"description": "Unassigns the user from an Autopilot device.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignedDevices/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}/microsoft.graph.unassignUserFromDevice"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Update Device Properties",
					"value": "Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Update Device Properties",
					"action": "Invoke action updateDeviceProperties",
					"description": "Updates properties on Autopilot devices.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/assignedDevices/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}/microsoft.graph.updateDeviceProperties"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assign",
					"value": "Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeploymentProfiles/{{$parameter[\"windowsAutopilotDeploymentProfile-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Assign Resource Account To Device",
					"value": "Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Assign Resource Account To Device",
					"action": "Invoke action assignResourceAccountToDevice",
					"description": "Assigns resource account to Autopilot devices.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeviceIdentities/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}/microsoft.graph.assignResourceAccountToDevice"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Assign User To Device",
					"value": "Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Assign User To Device",
					"action": "Invoke action assignUserToDevice",
					"description": "Assigns user to Autopilot devices.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeviceIdentities/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}/microsoft.graph.assignUserToDevice"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Unassign Resource Account From Device",
					"value": "Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Unassign Resource Account From Device",
					"action": "Invoke action unassignResourceAccountFromDevice",
					"description": "Unassigns the resource account from an Autopilot device.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeviceIdentities/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}/microsoft.graph.unassignResourceAccountFromDevice"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Unassign User From Device",
					"value": "Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Unassign User From Device",
					"action": "Invoke action unassignUserFromDevice",
					"description": "Unassigns the user from an Autopilot device.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeviceIdentities/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}/microsoft.graph.unassignUserFromDevice"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Update Device Properties",
					"value": "Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Update Device Properties",
					"action": "Invoke action updateDeviceProperties",
					"description": "Updates properties on Autopilot devices.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotDeviceIdentities/{{$parameter[\"windowsAutopilotDeviceIdentity-id\"]}}/microsoft.graph.updateDeviceProperties"
						}
					}
				},
				{
					"name": "Device Management Windows Autopilot Settings Sync",
					"value": "Device Management Windows Autopilot Settings Sync",
					"action": "Invoke action sync",
					"description": "Initiates a sync of all AutoPilot registered devices from Store for Business and other portals. If the sync successful, this action returns a 204 No Content response code. If a sync is already in progress, the action returns a 409 Conflict response code.  If this sync action is called within 10 minutes of the previous sync, the action returns a 429 Too Many Requests response code.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsAutopilotSettings/microsoft.graph.sync"
						}
					}
				},
				{
					"name": "Device Management Windows Driver Update Profiles Windows Driver Update Profile Assign",
					"value": "Device Management Windows Driver Update Profiles Windows Driver Update Profile Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Windows Driver Update Profiles Windows Driver Update Profile Execute Action",
					"value": "Device Management Windows Driver Update Profiles Windows Driver Update Profile Execute Action",
					"action": "Invoke action executeAction",
					"description": "Invoke action executeAction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}/microsoft.graph.executeAction"
						}
					}
				},
				{
					"name": "Device Management Windows Driver Update Profiles Windows Driver Update Profile Sync Inventory",
					"value": "Device Management Windows Driver Update Profiles Windows Driver Update Profile Sync Inventory",
					"action": "Invoke action syncInventory",
					"description": "Sync the driver inventory of a WindowsDriverUpdateProfile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsDriverUpdateProfiles/{{$parameter[\"windowsDriverUpdateProfile-id\"]}}/microsoft.graph.syncInventory"
						}
					}
				},
				{
					"name": "Device Management Windows Feature Update Profiles Windows Feature Update Profile Assign",
					"value": "Device Management Windows Feature Update Profiles Windows Feature Update Profile Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsFeatureUpdateProfiles/{{$parameter[\"windowsFeatureUpdateProfile-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Windows Quality Update Profiles Windows Quality Update Profile Assign",
					"value": "Device Management Windows Quality Update Profiles Windows Quality Update Profile Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsQualityUpdateProfiles/{{$parameter[\"windowsQualityUpdateProfile-id\"]}}/microsoft.graph.assign"
						}
					}
				},
				{
					"name": "Device Management Zebra Fota Connector Approve Fota Apps",
					"value": "Device Management Zebra Fota Connector Approve Fota Apps",
					"action": "Invoke action approveFotaApps",
					"description": "Invoke action approveFotaApps",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/zebraFotaConnector/microsoft.graph.approveFotaApps"
						}
					}
				},
				{
					"name": "Device Management Zebra Fota Connector Connect",
					"value": "Device Management Zebra Fota Connector Connect",
					"action": "Invoke action connect",
					"description": "Invoke action connect",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/zebraFotaConnector/microsoft.graph.connect"
						}
					}
				},
				{
					"name": "Device Management Zebra Fota Connector Disconnect",
					"value": "Device Management Zebra Fota Connector Disconnect",
					"action": "Invoke action disconnect",
					"description": "Invoke action disconnect",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/zebraFotaConnector/microsoft.graph.disconnect"
						}
					}
				},
				{
					"name": "Device Management Zebra Fota Connector Has Active Deployments",
					"value": "Device Management Zebra Fota Connector Has Active Deployments",
					"action": "Invoke action hasActiveDeployments",
					"description": "Invoke action hasActiveDeployments",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/zebraFotaConnector/microsoft.graph.hasActiveDeployments"
						}
					}
				},
				{
					"name": "Device Management Zebra Fota Deployments Zebra Fota Deployment Cancel",
					"value": "Device Management Zebra Fota Deployments Zebra Fota Deployment Cancel",
					"action": "Invoke action cancel",
					"description": "Invoke action cancel",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/zebraFotaDeployments/{{$parameter[\"zebraFotaDeployment-id\"]}}/microsoft.graph.cancel"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/microsoft.graph.createToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Device Owner Enrollment Profiles Android Device Owner Enrollment Profile Create Token"
					]
				}
			}
		},
		{
			"displayName": "Token Validity In Seconds",
			"name": "tokenValidityInSeconds",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tokenValidityInSeconds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Device Owner Enrollment Profiles Android Device Owner Enrollment Profile Create Token"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/microsoft.graph.revokeToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Device Owner Enrollment Profiles Android Device Owner Enrollment Profile Revoke Token"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/microsoft.graph.createToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android For Work Enrollment Profiles Android For Work Enrollment Profile Create Token"
					]
				}
			}
		},
		{
			"displayName": "Token Validity In Seconds",
			"name": "tokenValidityInSeconds",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tokenValidityInSeconds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android For Work Enrollment Profiles Android For Work Enrollment Profile Create Token"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/microsoft.graph.revokeToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android For Work Enrollment Profiles Android For Work Enrollment Profile Revoke Token"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidForWorkSettings/microsoft.graph.completeSignup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android For Work Settings Complete Signup"
					]
				}
			}
		},
		{
			"displayName": "Enterprise Token",
			"name": "enterpriseToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "enterpriseToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android For Work Settings Complete Signup"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidForWorkSettings/microsoft.graph.requestSignupUrl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android For Work Settings Request Signup URL"
					]
				}
			}
		},
		{
			"displayName": "Host Name",
			"name": "hostName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "hostName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android For Work Settings Request Signup URL"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidForWorkSettings/microsoft.graph.syncApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android For Work Settings Sync Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidForWorkSettings/microsoft.graph.unbind",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android For Work Settings Unbind"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.addApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Managed Store Account Enterprise Settings Add Apps"
					]
				}
			}
		},
		{
			"displayName": "Product Ids",
			"name": "productIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "productIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Managed Store Account Enterprise Settings Add Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.approveApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Managed Store Account Enterprise Settings Approve Apps"
					]
				}
			}
		},
		{
			"displayName": "Approve All Permissions",
			"name": "approveAllPermissions",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "approveAllPermissions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Managed Store Account Enterprise Settings Approve Apps"
					]
				}
			}
		},
		{
			"displayName": "Package Ids",
			"name": "packageIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "packageIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Managed Store Account Enterprise Settings Approve Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.completeSignup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Managed Store Account Enterprise Settings Complete Signup"
					]
				}
			}
		},
		{
			"displayName": "Enterprise Token",
			"name": "enterpriseToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "enterpriseToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Managed Store Account Enterprise Settings Complete Signup"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.createGooglePlayWebToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Managed Store Account Enterprise Settings Create Google Play Web Token"
					]
				}
			}
		},
		{
			"displayName": "Parent Uri",
			"name": "parentUri",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "parentUri",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Managed Store Account Enterprise Settings Create Google Play Web Token"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.requestSignupUrl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Managed Store Account Enterprise Settings Request Signup URL"
					]
				}
			}
		},
		{
			"displayName": "Host Name",
			"name": "hostName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "hostName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Managed Store Account Enterprise Settings Request Signup URL"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.setAndroidDeviceOwnerFullyManagedEnrollmentState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Managed Store Account Enterprise Settings Set Android Device Owner Fully Managed Enrollment State"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Managed Store Account Enterprise Settings Set Android Device Owner Fully Managed Enrollment State"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.syncApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Managed Store Account Enterprise Settings Sync Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/microsoft.graph.unbind",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Android Managed Store Account Enterprise Settings Unbind"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/applePushNotificationCertificate/microsoft.graph.generateApplePushNotificationCertificateSigningRequest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Apple Push Notification Certificate Generate Apple Push Notification Certificate Signing Request"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/microsoft.graph.setPriority",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles Apple User Initiated Enrollment Profile Set Priority"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Apple User Initiated Enrollment Profiles Apple User Initiated Enrollment Profile Set Priority"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/assignmentFilters/microsoft.graph.enable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Assignment Filters Enable"
					]
				}
			}
		},
		{
			"displayName": "Enable",
			"name": "enable",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "enable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Assignment Filters Enable"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/assignmentFilters/microsoft.graph.validateFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Assignment Filters Validate Filter"
					]
				}
			}
		},
		{
			"displayName": "Device And App Management Assignment Filter",
			"name": "deviceAndAppManagementAssignmentFilter",
			"type": "string",
			"default": {
				"payloads": [
					{}
				],
				"roleScopeTags": [
					null
				]
			},
			"routing": {
				"send": {
					"property": "deviceAndAppManagementAssignmentFilter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Assignment Filters Validate Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/microsoft.graph.getHealthMetricTimeSeries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Certificate Connector Details Certificate Connector Details Get Health Metric Time Series"
					]
				}
			}
		},
		{
			"displayName": "Time Series",
			"name": "timeSeries",
			"type": "json",
			"default": "{}",
			"description": "Parameter passed to GetHealthMetricTimeSeries when requesting snapshot time series.",
			"routing": {
				"send": {
					"property": "timeSeries",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Certificate Connector Details Certificate Connector Details Get Health Metric Time Series"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}/microsoft.graph.getHealthMetrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Certificate Connector Details Certificate Connector Details Get Health Metrics"
					]
				}
			}
		},
		{
			"displayName": "Metric Names",
			"name": "metricNames",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "metricNames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Certificate Connector Details Certificate Connector Details Get Health Metrics"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/chromeOSOnboardingSettings/microsoft.graph.connect",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Chrome OS Onboarding Settings Connect"
					]
				}
			}
		},
		{
			"displayName": "Owner Access Token",
			"name": "ownerAccessToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "ownerAccessToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Chrome OS Onboarding Settings Connect"
					]
				}
			}
		},
		{
			"displayName": "Owner User Principal Name",
			"name": "ownerUserPrincipalName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "ownerUserPrincipalName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Chrome OS Onboarding Settings Connect"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/chromeOSOnboardingSettings/microsoft.graph.disconnect",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Chrome OS Onboarding Settings Disconnect"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/microsoft.graph.bulkReprovisionCloudPc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Bulk Reprovision Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "Managed Device Ids",
			"name": "managedDeviceIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "managedDeviceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Bulk Reprovision Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/microsoft.graph.bulkRestoreCloudPc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Bulk Restore Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "Managed Device Ids",
			"name": "managedDeviceIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "managedDeviceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Bulk Restore Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "Restore Point Date Time",
			"name": "restorePointDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "restorePointDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Bulk Restore Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "Time Range",
			"name": "timeRange",
			"type": "options",
			"default": "before",
			"options": [
				{
					"name": "Before",
					"value": "before"
				},
				{
					"name": "After",
					"value": "after"
				},
				{
					"name": "Before Or After",
					"value": "beforeOrAfter"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "timeRange",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Bulk Restore Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/microsoft.graph.bulkSetCloudPcReviewStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Bulk Set Cloud Pc Review Status"
					]
				}
			}
		},
		{
			"displayName": "Managed Device Ids",
			"name": "managedDeviceIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "managedDeviceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Bulk Set Cloud Pc Review Status"
					]
				}
			}
		},
		{
			"displayName": "Review Status",
			"name": "reviewStatus",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "reviewStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Bulk Set Cloud Pc Review Status"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/microsoft.graph.downloadAppDiagnostics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Download App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Request",
			"name": "request",
			"type": "json",
			"default": "{\n  \"files\": [\n    null\n  ]\n}",
			"description": "Request used to download app diagnostic files.",
			"routing": {
				"send": {
					"property": "request",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Download App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/microsoft.graph.executeAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Action Name",
			"name": "actionName",
			"type": "options",
			"default": "retire",
			"options": [
				{
					"name": "Retire",
					"value": "retire"
				},
				{
					"name": "Delete",
					"value": "delete"
				},
				{
					"name": "Full Scan",
					"value": "fullScan"
				},
				{
					"name": "Quick Scan",
					"value": "quickScan"
				},
				{
					"name": "Signature Update",
					"value": "signatureUpdate"
				},
				{
					"name": "Wipe",
					"value": "wipe"
				},
				{
					"name": "Custom Text Notification",
					"value": "customTextNotification"
				},
				{
					"name": "Reboot Now",
					"value": "rebootNow"
				},
				{
					"name": "Set Device Name",
					"value": "setDeviceName"
				},
				{
					"name": "Sync Device",
					"value": "syncDevice"
				},
				{
					"name": "Deprovision",
					"value": "deprovision"
				},
				{
					"name": "Disable",
					"value": "disable"
				},
				{
					"name": "Reenable",
					"value": "reenable"
				},
				{
					"name": "Move Device To Organizational Unit",
					"value": "moveDeviceToOrganizationalUnit"
				},
				{
					"name": "Activate Device Esim",
					"value": "activateDeviceEsim"
				},
				{
					"name": "Collect Diagnostics",
					"value": "collectDiagnostics"
				},
				{
					"name": "Initiate Mobile Device Management Key Recovery",
					"value": "initiateMobileDeviceManagementKeyRecovery"
				},
				{
					"name": "Initiate On Demand Proactive Remediation",
					"value": "initiateOnDemandProactiveRemediation"
				}
			],
			"routing": {
				"send": {
					"property": "actionName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Carrier URL",
			"name": "carrierUrl",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "carrierUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Deprovision Reason",
			"name": "deprovisionReason",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deprovisionReason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Device Ids",
			"name": "deviceIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "deviceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Device Name",
			"name": "deviceName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deviceName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Keep Enrollment Data",
			"name": "keepEnrollmentData",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "keepEnrollmentData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Keep User Data",
			"name": "keepUserData",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "keepUserData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Notification Body",
			"name": "notificationBody",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notificationBody",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Notification Title",
			"name": "notificationTitle",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notificationTitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Organizational Unit Path",
			"name": "organizationalUnitPath",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "organizationalUnitPath",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Persist Esim Data Plan",
			"name": "persistEsimDataPlan",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "persistEsimDataPlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/microsoft.graph.moveDevicesToOU",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Move Devices To OU"
					]
				}
			}
		},
		{
			"displayName": "Device Ids",
			"name": "deviceIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "deviceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Move Devices To OU"
					]
				}
			}
		},
		{
			"displayName": "Organizational Unit Path",
			"name": "organizationalUnitPath",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "organizationalUnitPath",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Move Devices To OU"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}/microsoft.graph.createDownloadUrl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Log Collection Requests Device Log Collection Response Create Download URL"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.activateDeviceEsim",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Activate Device Esim"
					]
				}
			}
		},
		{
			"displayName": "Carrier URL",
			"name": "carrierUrl",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "carrierUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Activate Device Esim"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.bypassActivationLock",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Bypass Activation Lock"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.cleanWindowsDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Clean Windows Device"
					]
				}
			}
		},
		{
			"displayName": "Keep User Data",
			"name": "keepUserData",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "keepUserData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Clean Windows Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.createDeviceLogCollectionRequest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Create Device Log Collection Request"
					]
				}
			}
		},
		{
			"displayName": "Template Type",
			"name": "templateType",
			"type": "json",
			"default": "{}",
			"description": "Windows Log Collection request entity.",
			"routing": {
				"send": {
					"property": "templateType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Create Device Log Collection Request"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.createRemoteHelpSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Create Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "Session Type",
			"name": "sessionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Create Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.deleteUserFromSharedAppleDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Delete User From Shared Apple Device"
					]
				}
			}
		},
		{
			"displayName": "User Principal Name",
			"name": "userPrincipalName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userPrincipalName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Delete User From Shared Apple Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.deprovision",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Deprovision"
					]
				}
			}
		},
		{
			"displayName": "Deprovision Reason",
			"name": "deprovisionReason",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deprovisionReason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Deprovision"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.disable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Disable"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.disableLostMode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Disable Lost Mode"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.enableLostMode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Enable Lost Mode"
					]
				}
			}
		},
		{
			"displayName": "Footer",
			"name": "footer",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "footer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Enable Lost Mode"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Enable Lost Mode"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phoneNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phoneNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Enable Lost Mode"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.endRemoteHelpSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device End Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "Session Key",
			"name": "sessionKey",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device End Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.enrollNowAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Enroll Now Action"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.initiateMobileDeviceManagementKeyRecovery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Initiate Mobile Device Management Key Recovery"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.initiateOnDemandProactiveRemediation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Initiate On Demand Proactive Remediation"
					]
				}
			}
		},
		{
			"displayName": "Script Policy ID",
			"name": "scriptPolicyId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "scriptPolicyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Initiate On Demand Proactive Remediation"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.locateDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Locate Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.logoutSharedAppleDeviceActiveUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Logout Shared Apple Device Active User"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.overrideComplianceState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Override Compliance State"
					]
				}
			}
		},
		{
			"displayName": "Compliance State",
			"name": "complianceState",
			"type": "options",
			"default": "basedOnDeviceCompliancePolicy",
			"description": "Administrator configured device compliance state Enum",
			"options": [
				{
					"name": "Based On Device Compliance Policy",
					"value": "basedOnDeviceCompliancePolicy"
				},
				{
					"name": "Non Compliant",
					"value": "nonCompliant"
				}
			],
			"routing": {
				"send": {
					"property": "complianceState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Override Compliance State"
					]
				}
			}
		},
		{
			"displayName": "Remediation URL",
			"name": "remediationUrl",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "remediationUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Override Compliance State"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.playLostModeSound",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Play Lost Mode Sound"
					]
				}
			}
		},
		{
			"displayName": "Duration In Minutes",
			"name": "durationInMinutes",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "durationInMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Play Lost Mode Sound"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.rebootNow",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Reboot Now"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.recoverPasscode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Recover Passcode"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.reenable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Reenable"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.remoteLock",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Remote Lock"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.removeDeviceFirmwareConfigurationInterfaceManagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Remove Device Firmware Configuration Interface Management"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.reprovisionCloudPc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Reprovision Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.requestRemoteAssistance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Request Remote Assistance"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.requestRemoteHelpSessionAccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Request Remote Help Session Access"
					]
				}
			}
		},
		{
			"displayName": "Pub Sub Connection ID",
			"name": "pubSubConnectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pubSubConnectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Request Remote Help Session Access"
					]
				}
			}
		},
		{
			"displayName": "Session Key",
			"name": "sessionKey",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Request Remote Help Session Access"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.resetPasscode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Reset Passcode"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.resizeCloudPc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Resize Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "Target Service Plan ID",
			"name": "targetServicePlanId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "targetServicePlanId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Resize Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.restoreCloudPc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Restore Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "Cloud Pc Snapshot ID",
			"name": "cloudPcSnapshotId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "cloudPcSnapshotId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Restore Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.retire",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Retire"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.revokeAppleVppLicenses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Revoke Apple Vpp Licenses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.rotateBitLockerKeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Rotate Bit Locker Keys"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.rotateFileVaultKey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Rotate File Vault Key"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.sendCustomNotificationToCompanyPortal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Send Custom Notification To Company Portal"
					]
				}
			}
		},
		{
			"displayName": "Notification Body",
			"name": "notificationBody",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notificationBody",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Send Custom Notification To Company Portal"
					]
				}
			}
		},
		{
			"displayName": "Notification Title",
			"name": "notificationTitle",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notificationTitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Send Custom Notification To Company Portal"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.setCloudPcReviewStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Set Cloud Pc Review Status"
					]
				}
			}
		},
		{
			"displayName": "Review Status",
			"name": "reviewStatus",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "reviewStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Set Cloud Pc Review Status"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.setDeviceName",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Set Device Name"
					]
				}
			}
		},
		{
			"displayName": "Device Name",
			"name": "deviceName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deviceName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Set Device Name"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.shutDown",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Shut Down"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.syncDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Sync Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.triggerConfigurationManagerAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Trigger Configuration Manager Action"
					]
				}
			}
		},
		{
			"displayName": "Configuration Manager Action",
			"name": "configurationManagerAction",
			"type": "json",
			"default": "{}",
			"description": "Parameter for action triggerConfigurationManagerAction",
			"routing": {
				"send": {
					"property": "configurationManagerAction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Trigger Configuration Manager Action"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.updateWindowsDeviceAccount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Update Windows Device Account"
					]
				}
			}
		},
		{
			"displayName": "Update Windows Device Account Action Parameter",
			"name": "updateWindowsDeviceAccountActionParameter",
			"type": "json",
			"default": "{\n  \"deviceAccount\": {}\n}",
			"routing": {
				"send": {
					"property": "updateWindowsDeviceAccountActionParameter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Update Windows Device Account"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.windowsDefenderScan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Windows Defender Scan"
					]
				}
			}
		},
		{
			"displayName": "Quick Scan",
			"name": "quickScan",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "quickScan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Windows Defender Scan"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.windowsDefenderUpdateSignatures",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Windows Defender Update Signatures"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/microsoft.graph.wipe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Wipe"
					]
				}
			}
		},
		{
			"displayName": "Keep Enrollment Data",
			"name": "keepEnrollmentData",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "keepEnrollmentData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Wipe"
					]
				}
			}
		},
		{
			"displayName": "Keep User Data",
			"name": "keepUserData",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "keepUserData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Wipe"
					]
				}
			}
		},
		{
			"displayName": "Mac Os Unlock Code",
			"name": "macOsUnlockCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "macOsUnlockCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Wipe"
					]
				}
			}
		},
		{
			"displayName": "Persist Esim Data Plan",
			"name": "persistEsimDataPlan",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "persistEsimDataPlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Wipe"
					]
				}
			}
		},
		{
			"displayName": "Use Protected Wipe",
			"name": "useProtectedWipe",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "useProtectedWipe",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Comanaged Devices Managed Device Wipe"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Compliance Policies Device Management Compliance Policy Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Compliance Policies Device Management Compliance Policy Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/microsoft.graph.setScheduledActions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Compliance Policies Device Management Compliance Policy Set Scheduled Actions"
					]
				}
			}
		},
		{
			"displayName": "Scheduled Actions",
			"name": "scheduledActions",
			"type": "json",
			"default": "[\n  {\n    \"scheduledActionConfigurations\": [\n      {\n        \"notificationMessageCCList\": [\n          null\n        ]\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "scheduledActions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Compliance Policies Device Management Compliance Policy Set Scheduled Actions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Configuration Policies Device Management Configuration Policy Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Configuration Policies Device Management Configuration Policy Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/microsoft.graph.createCopy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Configuration Policies Device Management Configuration Policy Create Copy"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Configuration Policies Device Management Configuration Policy Create Copy"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Configuration Policies Device Management Configuration Policy Create Copy"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/microsoft.graph.reorder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Configuration Policies Device Management Configuration Policy Reorder"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Configuration Policies Device Management Configuration Policy Reorder"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/dataSharingConsents/{dataSharingConsent-id}/microsoft.graph.consentToDataSharing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Data Sharing Consents Data Sharing Consent Consent To Data Sharing"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/microsoft.graph.setDefaultProfile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Dep Onboarding Setting Enrollment Profiles Enrollment Profile Set Default Profile"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/microsoft.graph.updateDeviceProfileAssignment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Dep Onboarding Setting Enrollment Profiles Enrollment Profile Update Device Profile Assignment"
					]
				}
			}
		},
		{
			"displayName": "Device Ids",
			"name": "deviceIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "deviceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Dep Onboarding Setting Enrollment Profiles Enrollment Profile Update Device Profile Assignment"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/importedAppleDeviceIdentities/microsoft.graph.importAppleDeviceIdentityList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Dep Onboarding Setting Imported Apple Device Identities Import Apple Device Identity List"
					]
				}
			}
		},
		{
			"displayName": "Imported Apple Device Identities",
			"name": "importedAppleDeviceIdentities",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "importedAppleDeviceIdentities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Dep Onboarding Setting Imported Apple Device Identities Import Apple Device Identity List"
					]
				}
			}
		},
		{
			"displayName": "Overwrite Imported Device Identities",
			"name": "overwriteImportedDeviceIdentities",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "overwriteImportedDeviceIdentities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Dep Onboarding Setting Imported Apple Device Identities Import Apple Device Identity List"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/microsoft.graph.generateEncryptionPublicKey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Dep Onboarding Setting Generate Encryption Public Key"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/microsoft.graph.shareForSchoolDataSyncService",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Dep Onboarding Setting Share For School Data Sync Service"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/microsoft.graph.syncWithAppleDeviceEnrollmentProgram",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Dep Onboarding Setting Sync With Apple Device Enrollment Program"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/microsoft.graph.unshareForSchoolDataSyncService",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Dep Onboarding Setting Unshare For School Data Sync Service"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/microsoft.graph.uploadDepToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Dep Onboarding Setting Upload Dep Token"
					]
				}
			}
		},
		{
			"displayName": "Apple ID",
			"name": "appleId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "appleId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Dep Onboarding Setting Upload Dep Token"
					]
				}
			}
		},
		{
			"displayName": "Dep Token",
			"name": "depToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "depToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Dep Onboarding Settings Dep Onboarding Setting Upload Dep Token"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/microsoft.graph.getNoncompliantDevicesToRetire",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Noncompliant Devices To Retire"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Noncompliant Devices To Retire"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Noncompliant Devices To Retire"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Noncompliant Devices To Retire"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Noncompliant Devices To Retire"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Noncompliant Devices To Retire"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Noncompliant Devices To Retire"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Noncompliant Devices To Retire"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Noncompliant Devices To Retire"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Noncompliant Devices To Retire"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/microsoft.graph.hasPayloadLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "Payload Ids",
			"name": "payloadIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "payloadIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/microsoft.graph.refreshDeviceComplianceReportSummarization",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Refresh Device Compliance Report Summarization"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/microsoft.graph.setScheduledRetireState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Set Scheduled Retire State"
					]
				}
			}
		},
		{
			"displayName": "Managed Device Ids",
			"name": "managedDeviceIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "managedDeviceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Set Scheduled Retire State"
					]
				}
			}
		},
		{
			"displayName": "Scoped To All Devices",
			"name": "scopedToAllDevices",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "scopedToAllDevices",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Set Scheduled Retire State"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "options",
			"default": "cancelRetire",
			"description": "Cancel or confirm scheduled retire ",
			"options": [
				{
					"name": "Cancel Retire",
					"value": "cancelRetire"
				},
				{
					"name": "Confirm Retire",
					"value": "confirmRetire"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Set Scheduled Retire State"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/microsoft.graph.validateComplianceScript",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Validate Compliance Script"
					]
				}
			}
		},
		{
			"displayName": "Device Compliance Policy Script",
			"name": "deviceCompliancePolicyScript",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "deviceCompliancePolicyScript",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Validate Compliance Script"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Device Compliance Policy Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Device Compliance Policy Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/microsoft.graph.scheduleActionsForRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Device Compliance Policy Schedule Actions For Rules"
					]
				}
			}
		},
		{
			"displayName": "Device Compliance Scheduled Action For Rules",
			"name": "deviceComplianceScheduledActionForRules",
			"type": "json",
			"default": "[\n  {\n    \"scheduledActionConfigurations\": [\n      {\n        \"notificationMessageCCList\": [\n          null\n        ]\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "deviceComplianceScheduledActionForRules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Policies Device Compliance Policy Schedule Actions For Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Scripts Device Compliance Script Assign"
					]
				}
			}
		},
		{
			"displayName": "Device Health Script Assignments",
			"name": "deviceHealthScriptAssignments",
			"type": "json",
			"default": "[\n  {\n    \"runSchedule\": {},\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "deviceHealthScriptAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Compliance Scripts Device Compliance Script Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations/microsoft.graph.getTargetedUsersAndDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Configurations Get Targeted Users And Devices"
					]
				}
			}
		},
		{
			"displayName": "Device Configuration Ids",
			"name": "deviceConfigurationIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "deviceConfigurationIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Configurations Get Targeted Users And Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations/microsoft.graph.hasPayloadLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Configurations Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "Payload Ids",
			"name": "payloadIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "payloadIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Configurations Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Configurations Device Configuration Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Configurations Device Configuration Assign"
					]
				}
			}
		},
		{
			"displayName": "Device Configuration Group Assignments",
			"name": "deviceConfigurationGroupAssignments",
			"type": "json",
			"default": "[\n  {\n    \"deviceConfiguration\": {\n      \"assignments\": [\n        {\n          \"target\": {}\n        }\n      ],\n      \"deviceManagementApplicabilityRuleDeviceMode\": {},\n      \"deviceManagementApplicabilityRuleOsEdition\": {\n        \"osEditionTypes\": [\n          null\n        ],\n        \"ruleType\": {}\n      },\n      \"deviceManagementApplicabilityRuleOsVersion\": {\n        \"ruleType\": {}\n      },\n      \"deviceSettingStateSummaries\": [\n        {}\n      ],\n      \"deviceStatusOverview\": {},\n      \"deviceStatuses\": [\n        {}\n      ],\n      \"groupAssignments\": [\n        {}\n      ],\n      \"roleScopeTagIds\": [\n        null\n      ],\n      \"userStatusOverview\": {},\n      \"userStatuses\": [\n        {\n          \"status\": {}\n        }\n      ]\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "deviceConfigurationGroupAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Configurations Device Configuration Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/microsoft.graph.assignedAccessMultiModeProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Configurations Device Configuration Assigned Access Multi Mode Profiles"
					]
				}
			}
		},
		{
			"displayName": "Assigned Access Multi Mode Profiles",
			"name": "assignedAccessMultiModeProfiles",
			"type": "json",
			"default": "[\n  {\n    \"appUserModelIds\": [\n      null\n    ],\n    \"desktopAppPaths\": [\n      null\n    ],\n    \"userAccounts\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "assignedAccessMultiModeProfiles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Configurations Device Configuration Assigned Access Multi Mode Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/microsoft.graph.windowsPrivacyAccessControls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Configurations Device Configuration Windows Privacy Access Controls"
					]
				}
			}
		},
		{
			"displayName": "Windows Privacy Access Controls",
			"name": "windowsPrivacyAccessControls",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "windowsPrivacyAccessControls",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Configurations Device Configuration Windows Privacy Access Controls"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Custom Attribute Shell Scripts Device Custom Attribute Shell Script Assign"
					]
				}
			}
		},
		{
			"displayName": "Device Management Script Assignments",
			"name": "deviceManagementScriptAssignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "deviceManagementScriptAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Custom Attribute Shell Scripts Device Custom Attribute Shell Script Assign"
					]
				}
			}
		},
		{
			"displayName": "Device Management Script Group Assignments",
			"name": "deviceManagementScriptGroupAssignments",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "deviceManagementScriptGroupAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Custom Attribute Shell Scripts Device Custom Attribute Shell Script Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceEnrollmentConfigurations/microsoft.graph.createEnrollmentNotificationConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Create Enrollment Notification Configuration"
					]
				}
			}
		},
		{
			"displayName": "Device Enrollment Notification Configurations",
			"name": "deviceEnrollmentNotificationConfigurations",
			"type": "json",
			"default": "[\n  {\n    \"assignments\": [\n      {\n        \"target\": {}\n      }\n    ],\n    \"roleScopeTagIds\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "deviceEnrollmentNotificationConfigurations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Create Enrollment Notification Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceEnrollmentConfigurations/microsoft.graph.hasPayloadLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "Payload Ids",
			"name": "payloadIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "payloadIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Device Enrollment Configuration Assign"
					]
				}
			}
		},
		{
			"displayName": "Enrollment Configuration Assignments",
			"name": "enrollmentConfigurationAssignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "enrollmentConfigurationAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Device Enrollment Configuration Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/microsoft.graph.setPriority",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Device Enrollment Configuration Set Priority"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Device Enrollment Configuration Set Priority"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceHealthScripts/microsoft.graph.enableGlobalScripts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Health Scripts Enable Global Scripts"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Health Scripts Device Health Script Assign"
					]
				}
			}
		},
		{
			"displayName": "Device Health Script Assignments",
			"name": "deviceHealthScriptAssignments",
			"type": "json",
			"default": "[\n  {\n    \"runSchedule\": {},\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "deviceHealthScriptAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Health Scripts Device Health Script Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/microsoft.graph.getGlobalScriptHighestAvailableVersion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Health Scripts Device Health Script Get Global Script Highest Available Version"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/microsoft.graph.updateGlobalScript",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Health Scripts Device Health Script Update Global Script"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Health Scripts Device Health Script Update Global Script"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}/microsoft.graph.terminate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Management Partners Device Management Partner Terminate"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceManagementScripts/microsoft.graph.hasPayloadLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Management Scripts Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "Payload Ids",
			"name": "payloadIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "payloadIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Management Scripts Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Management Scripts Device Management Script Assign"
					]
				}
			}
		},
		{
			"displayName": "Device Management Script Assignments",
			"name": "deviceManagementScriptAssignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "deviceManagementScriptAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Management Scripts Device Management Script Assign"
					]
				}
			}
		},
		{
			"displayName": "Device Management Script Group Assignments",
			"name": "deviceManagementScriptGroupAssignments",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "deviceManagementScriptGroupAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Management Scripts Device Management Script Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Shell Scripts Device Shell Script Assign"
					]
				}
			}
		},
		{
			"displayName": "Device Management Script Assignments",
			"name": "deviceManagementScriptAssignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "deviceManagementScriptAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Shell Scripts Device Shell Script Assign"
					]
				}
			}
		},
		{
			"displayName": "Device Management Script Group Assignments",
			"name": "deviceManagementScriptGroupAssignments",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "deviceManagementScriptGroupAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Device Shell Scripts Device Shell Script Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Embedded SIM Activation Code Pool Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Embedded SIM Activation Code Pool Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}/microsoft.graph.sync",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Exchange Connectors Device Management Exchange Connector Sync"
					]
				}
			}
		},
		{
			"displayName": "Sync Type",
			"name": "syncType",
			"type": "options",
			"default": "fullSync",
			"description": "The type of Exchange Connector sync requested.",
			"options": [
				{
					"name": "Full Sync",
					"value": "fullSync"
				},
				{
					"name": "Delta Sync",
					"value": "deltaSync"
				}
			],
			"routing": {
				"send": {
					"property": "syncType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Exchange Connectors Device Management Exchange Connector Sync"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Configurations Group Policy Configuration Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Configurations Group Policy Configuration Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/microsoft.graph.updateDefinitionValues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Configurations Group Policy Configuration Update Definition Values"
					]
				}
			}
		},
		{
			"displayName": "Added",
			"name": "added",
			"type": "json",
			"default": "[\n  {\n    \"definition\": {\n      \"category\": {\n        \"children\": [\n          {}\n        ],\n        \"definitionFile\": {\n          \"definitions\": [\n            {}\n          ],\n          \"languageCodes\": [\n            null\n          ]\n        },\n        \"definitions\": [\n          {}\n        ],\n        \"parent\": {}\n      },\n      \"definitionFile\": {},\n      \"nextVersionDefinition\": {},\n      \"policyType\": {},\n      \"presentations\": [\n        {\n          \"definition\": {}\n        }\n      ],\n      \"previousVersionDefinition\": {}\n    },\n    \"presentationValues\": [\n      {\n        \"definitionValue\": {},\n        \"presentation\": {}\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "added",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Configurations Group Policy Configuration Update Definition Values"
					]
				}
			}
		},
		{
			"displayName": "Deleted Ids",
			"name": "deletedIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "deletedIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Configurations Group Policy Configuration Update Definition Values"
					]
				}
			}
		},
		{
			"displayName": "Updated",
			"name": "updated",
			"type": "json",
			"default": "[\n  {\n    \"definition\": {\n      \"category\": {\n        \"children\": [\n          {}\n        ],\n        \"definitionFile\": {\n          \"definitions\": [\n            {}\n          ],\n          \"languageCodes\": [\n            null\n          ]\n        },\n        \"definitions\": [\n          {}\n        ],\n        \"parent\": {}\n      },\n      \"definitionFile\": {},\n      \"nextVersionDefinition\": {},\n      \"policyType\": {},\n      \"presentations\": [\n        {\n          \"definition\": {}\n        }\n      ],\n      \"previousVersionDefinition\": {}\n    },\n    \"presentationValues\": [\n      {\n        \"definitionValue\": {},\n        \"presentation\": {}\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Configurations Group Policy Configuration Update Definition Values"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyMigrationReports/microsoft.graph.createMigrationReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Create Migration Report"
					]
				}
			}
		},
		{
			"displayName": "Group Policy Object File",
			"name": "groupPolicyObjectFile",
			"type": "string",
			"default": {
				"roleScopeTagIds": [
					null
				]
			},
			"routing": {
				"send": {
					"property": "groupPolicyObjectFile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Create Migration Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/microsoft.graph.updateScopeTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Group Policy Migration Report Update Scope Tags"
					]
				}
			}
		},
		{
			"displayName": "Role Scope Tag Ids",
			"name": "roleScopeTagIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "roleScopeTagIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Migration Reports Group Policy Migration Report Update Scope Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/microsoft.graph.addLanguageFiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Add Language Files"
					]
				}
			}
		},
		{
			"displayName": "Group Policy Uploaded Language Files",
			"name": "groupPolicyUploadedLanguageFiles",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "groupPolicyUploadedLanguageFiles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Add Language Files"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/microsoft.graph.remove",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Remove"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/microsoft.graph.removeLanguageFiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Remove Language Files"
					]
				}
			}
		},
		{
			"displayName": "Group Policy Uploaded Language Files",
			"name": "groupPolicyUploadedLanguageFiles",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "groupPolicyUploadedLanguageFiles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Remove Language Files"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/microsoft.graph.updateLanguageFiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Update Language Files"
					]
				}
			}
		},
		{
			"displayName": "Group Policy Uploaded Language Files",
			"name": "groupPolicyUploadedLanguageFiles",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "groupPolicyUploadedLanguageFiles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Update Language Files"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/microsoft.graph.uploadNewVersion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Upload New Version"
					]
				}
			}
		},
		{
			"displayName": "Content",
			"name": "content",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "content",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Upload New Version"
					]
				}
			}
		},
		{
			"displayName": "Group Policy Uploaded Language Files",
			"name": "groupPolicyUploadedLanguageFiles",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "groupPolicyUploadedLanguageFiles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Group Policy Uploaded Definition File Upload New Version"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/importedDeviceIdentities/microsoft.graph.importDeviceIdentityList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Imported Device Identities Import Device Identity List"
					]
				}
			}
		},
		{
			"displayName": "Imported Device Identities",
			"name": "importedDeviceIdentities",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "importedDeviceIdentities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Imported Device Identities Import Device Identity List"
					]
				}
			}
		},
		{
			"displayName": "Overwrite Imported Device Identities",
			"name": "overwriteImportedDeviceIdentities",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "overwriteImportedDeviceIdentities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Imported Device Identities Import Device Identity List"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/importedDeviceIdentities/microsoft.graph.searchExistingIdentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Imported Device Identities Search Existing Identities"
					]
				}
			}
		},
		{
			"displayName": "Imported Device Identities",
			"name": "importedDeviceIdentities",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "importedDeviceIdentities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Imported Device Identities Search Existing Identities"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/importedWindowsAutopilotDeviceIdentities/microsoft.graph.import",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Imported Windows Autopilot Device Identities Import"
					]
				}
			}
		},
		{
			"displayName": "Imported Windows Autopilot Device Identities",
			"name": "importedWindowsAutopilotDeviceIdentities",
			"type": "json",
			"default": "[\n  {\n    \"state\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "importedWindowsAutopilotDeviceIdentities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Imported Windows Autopilot Device Identities Import"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/microsoft.graph.createCopy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Create Copy"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Create Copy"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Create Copy"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/microsoft.graph.migrateToTemplate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Migrate To Template"
					]
				}
			}
		},
		{
			"displayName": "New Template ID",
			"name": "newTemplateId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "newTemplateId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Migrate To Template"
					]
				}
			}
		},
		{
			"displayName": "Preserve Custom Values",
			"name": "preserveCustomValues",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "preserveCustomValues",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Migrate To Template"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intents/{deviceManagementIntent-id}/microsoft.graph.updateSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Update Settings"
					]
				}
			}
		},
		{
			"displayName": "Settings",
			"name": "settings",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "settings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Intents Device Management Intent Update Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Intune Branding Profiles Intune Branding Profile Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Intune Branding Profiles Intune Branding Profile Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/microsoft.graph.bulkReprovisionCloudPc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Bulk Reprovision Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "Managed Device Ids",
			"name": "managedDeviceIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "managedDeviceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Bulk Reprovision Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/microsoft.graph.bulkRestoreCloudPc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Bulk Restore Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "Managed Device Ids",
			"name": "managedDeviceIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "managedDeviceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Bulk Restore Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "Restore Point Date Time",
			"name": "restorePointDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "restorePointDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Bulk Restore Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "Time Range",
			"name": "timeRange",
			"type": "options",
			"default": "before",
			"options": [
				{
					"name": "Before",
					"value": "before"
				},
				{
					"name": "After",
					"value": "after"
				},
				{
					"name": "Before Or After",
					"value": "beforeOrAfter"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "timeRange",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Bulk Restore Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/microsoft.graph.bulkSetCloudPcReviewStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Bulk Set Cloud Pc Review Status"
					]
				}
			}
		},
		{
			"displayName": "Managed Device Ids",
			"name": "managedDeviceIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "managedDeviceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Bulk Set Cloud Pc Review Status"
					]
				}
			}
		},
		{
			"displayName": "Review Status",
			"name": "reviewStatus",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "reviewStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Bulk Set Cloud Pc Review Status"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/microsoft.graph.downloadAppDiagnostics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Download App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Request",
			"name": "request",
			"type": "json",
			"default": "{\n  \"files\": [\n    null\n  ]\n}",
			"description": "Request used to download app diagnostic files.",
			"routing": {
				"send": {
					"property": "request",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Download App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/microsoft.graph.executeAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Action Name",
			"name": "actionName",
			"type": "options",
			"default": "retire",
			"options": [
				{
					"name": "Retire",
					"value": "retire"
				},
				{
					"name": "Delete",
					"value": "delete"
				},
				{
					"name": "Full Scan",
					"value": "fullScan"
				},
				{
					"name": "Quick Scan",
					"value": "quickScan"
				},
				{
					"name": "Signature Update",
					"value": "signatureUpdate"
				},
				{
					"name": "Wipe",
					"value": "wipe"
				},
				{
					"name": "Custom Text Notification",
					"value": "customTextNotification"
				},
				{
					"name": "Reboot Now",
					"value": "rebootNow"
				},
				{
					"name": "Set Device Name",
					"value": "setDeviceName"
				},
				{
					"name": "Sync Device",
					"value": "syncDevice"
				},
				{
					"name": "Deprovision",
					"value": "deprovision"
				},
				{
					"name": "Disable",
					"value": "disable"
				},
				{
					"name": "Reenable",
					"value": "reenable"
				},
				{
					"name": "Move Device To Organizational Unit",
					"value": "moveDeviceToOrganizationalUnit"
				},
				{
					"name": "Activate Device Esim",
					"value": "activateDeviceEsim"
				},
				{
					"name": "Collect Diagnostics",
					"value": "collectDiagnostics"
				},
				{
					"name": "Initiate Mobile Device Management Key Recovery",
					"value": "initiateMobileDeviceManagementKeyRecovery"
				},
				{
					"name": "Initiate On Demand Proactive Remediation",
					"value": "initiateOnDemandProactiveRemediation"
				}
			],
			"routing": {
				"send": {
					"property": "actionName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Carrier URL",
			"name": "carrierUrl",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "carrierUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Deprovision Reason",
			"name": "deprovisionReason",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deprovisionReason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Device Ids",
			"name": "deviceIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "deviceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Device Name",
			"name": "deviceName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deviceName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Keep Enrollment Data",
			"name": "keepEnrollmentData",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "keepEnrollmentData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Keep User Data",
			"name": "keepUserData",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "keepUserData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Notification Body",
			"name": "notificationBody",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notificationBody",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Notification Title",
			"name": "notificationTitle",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notificationTitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Organizational Unit Path",
			"name": "organizationalUnitPath",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "organizationalUnitPath",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Persist Esim Data Plan",
			"name": "persistEsimDataPlan",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "persistEsimDataPlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Execute Action"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/microsoft.graph.moveDevicesToOU",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Move Devices To OU"
					]
				}
			}
		},
		{
			"displayName": "Device Ids",
			"name": "deviceIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "deviceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Move Devices To OU"
					]
				}
			}
		},
		{
			"displayName": "Organizational Unit Path",
			"name": "organizationalUnitPath",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "organizationalUnitPath",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Move Devices To OU"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}/microsoft.graph.createDownloadUrl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Log Collection Requests Device Log Collection Response Create Download URL"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.activateDeviceEsim",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Activate Device Esim"
					]
				}
			}
		},
		{
			"displayName": "Carrier URL",
			"name": "carrierUrl",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "carrierUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Activate Device Esim"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.bypassActivationLock",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Bypass Activation Lock"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.cleanWindowsDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Clean Windows Device"
					]
				}
			}
		},
		{
			"displayName": "Keep User Data",
			"name": "keepUserData",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "keepUserData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Clean Windows Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.createDeviceLogCollectionRequest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Create Device Log Collection Request"
					]
				}
			}
		},
		{
			"displayName": "Template Type",
			"name": "templateType",
			"type": "json",
			"default": "{}",
			"description": "Windows Log Collection request entity.",
			"routing": {
				"send": {
					"property": "templateType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Create Device Log Collection Request"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.createRemoteHelpSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Create Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "Session Type",
			"name": "sessionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Create Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.deleteUserFromSharedAppleDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Delete User From Shared Apple Device"
					]
				}
			}
		},
		{
			"displayName": "User Principal Name",
			"name": "userPrincipalName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userPrincipalName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Delete User From Shared Apple Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.deprovision",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Deprovision"
					]
				}
			}
		},
		{
			"displayName": "Deprovision Reason",
			"name": "deprovisionReason",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deprovisionReason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Deprovision"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.disable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Disable"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.disableLostMode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Disable Lost Mode"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.enableLostMode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Enable Lost Mode"
					]
				}
			}
		},
		{
			"displayName": "Footer",
			"name": "footer",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "footer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Enable Lost Mode"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Enable Lost Mode"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phoneNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phoneNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Enable Lost Mode"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.endRemoteHelpSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device End Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "Session Key",
			"name": "sessionKey",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device End Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.enrollNowAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Enroll Now Action"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.initiateMobileDeviceManagementKeyRecovery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Initiate Mobile Device Management Key Recovery"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.initiateOnDemandProactiveRemediation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Initiate On Demand Proactive Remediation"
					]
				}
			}
		},
		{
			"displayName": "Script Policy ID",
			"name": "scriptPolicyId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "scriptPolicyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Initiate On Demand Proactive Remediation"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.locateDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Locate Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.logoutSharedAppleDeviceActiveUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Logout Shared Apple Device Active User"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.overrideComplianceState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Override Compliance State"
					]
				}
			}
		},
		{
			"displayName": "Compliance State",
			"name": "complianceState",
			"type": "options",
			"default": "basedOnDeviceCompliancePolicy",
			"description": "Administrator configured device compliance state Enum",
			"options": [
				{
					"name": "Based On Device Compliance Policy",
					"value": "basedOnDeviceCompliancePolicy"
				},
				{
					"name": "Non Compliant",
					"value": "nonCompliant"
				}
			],
			"routing": {
				"send": {
					"property": "complianceState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Override Compliance State"
					]
				}
			}
		},
		{
			"displayName": "Remediation URL",
			"name": "remediationUrl",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "remediationUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Override Compliance State"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.playLostModeSound",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Play Lost Mode Sound"
					]
				}
			}
		},
		{
			"displayName": "Duration In Minutes",
			"name": "durationInMinutes",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "durationInMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Play Lost Mode Sound"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.rebootNow",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Reboot Now"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.recoverPasscode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Recover Passcode"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.reenable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Reenable"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.remoteLock",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Remote Lock"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.removeDeviceFirmwareConfigurationInterfaceManagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Remove Device Firmware Configuration Interface Management"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.reprovisionCloudPc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Reprovision Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.requestRemoteAssistance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Request Remote Assistance"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.requestRemoteHelpSessionAccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Request Remote Help Session Access"
					]
				}
			}
		},
		{
			"displayName": "Pub Sub Connection ID",
			"name": "pubSubConnectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pubSubConnectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Request Remote Help Session Access"
					]
				}
			}
		},
		{
			"displayName": "Session Key",
			"name": "sessionKey",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Request Remote Help Session Access"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.resetPasscode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Reset Passcode"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.resizeCloudPc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Resize Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "Target Service Plan ID",
			"name": "targetServicePlanId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "targetServicePlanId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Resize Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.restoreCloudPc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Restore Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "Cloud Pc Snapshot ID",
			"name": "cloudPcSnapshotId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "cloudPcSnapshotId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Restore Cloud Pc"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.retire",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Retire"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.revokeAppleVppLicenses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Revoke Apple Vpp Licenses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.rotateBitLockerKeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Rotate Bit Locker Keys"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.rotateFileVaultKey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Rotate File Vault Key"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.sendCustomNotificationToCompanyPortal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Send Custom Notification To Company Portal"
					]
				}
			}
		},
		{
			"displayName": "Notification Body",
			"name": "notificationBody",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notificationBody",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Send Custom Notification To Company Portal"
					]
				}
			}
		},
		{
			"displayName": "Notification Title",
			"name": "notificationTitle",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notificationTitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Send Custom Notification To Company Portal"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.setCloudPcReviewStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Set Cloud Pc Review Status"
					]
				}
			}
		},
		{
			"displayName": "Review Status",
			"name": "reviewStatus",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "reviewStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Set Cloud Pc Review Status"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.setDeviceName",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Set Device Name"
					]
				}
			}
		},
		{
			"displayName": "Device Name",
			"name": "deviceName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deviceName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Set Device Name"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.shutDown",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Shut Down"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.syncDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Sync Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.triggerConfigurationManagerAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Trigger Configuration Manager Action"
					]
				}
			}
		},
		{
			"displayName": "Configuration Manager Action",
			"name": "configurationManagerAction",
			"type": "json",
			"default": "{}",
			"description": "Parameter for action triggerConfigurationManagerAction",
			"routing": {
				"send": {
					"property": "configurationManagerAction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Trigger Configuration Manager Action"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.updateWindowsDeviceAccount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Update Windows Device Account"
					]
				}
			}
		},
		{
			"displayName": "Update Windows Device Account Action Parameter",
			"name": "updateWindowsDeviceAccountActionParameter",
			"type": "json",
			"default": "{\n  \"deviceAccount\": {}\n}",
			"routing": {
				"send": {
					"property": "updateWindowsDeviceAccountActionParameter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Update Windows Device Account"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.windowsDefenderScan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Windows Defender Scan"
					]
				}
			}
		},
		{
			"displayName": "Quick Scan",
			"name": "quickScan",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "quickScan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Windows Defender Scan"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.windowsDefenderUpdateSignatures",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Windows Defender Update Signatures"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/microsoft.graph.wipe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Wipe"
					]
				}
			}
		},
		{
			"displayName": "Keep Enrollment Data",
			"name": "keepEnrollmentData",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "keepEnrollmentData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Wipe"
					]
				}
			}
		},
		{
			"displayName": "Keep User Data",
			"name": "keepUserData",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "keepUserData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Wipe"
					]
				}
			}
		},
		{
			"displayName": "Mac Os Unlock Code",
			"name": "macOsUnlockCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "macOsUnlockCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Wipe"
					]
				}
			}
		},
		{
			"displayName": "Persist Esim Data Plan",
			"name": "persistEsimDataPlan",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "persistEsimDataPlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Wipe"
					]
				}
			}
		},
		{
			"displayName": "Use Protected Wipe",
			"name": "useProtectedWipe",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "useProtectedWipe",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Managed Devices Managed Device Wipe"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoft.graph.enableAndroidDeviceAdministratorEnrollment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Enable Android Device Administrator Enrollment"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoft.graph.enableLegacyPcManagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Enable Legacy Pc Management"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoft.graph.enableUnlicensedAdminstrators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Enable Unlicensed Adminstrators"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoft.graph.evaluateAssignmentFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Evaluate Assignment Filter"
					]
				}
			}
		},
		{
			"displayName": "Data",
			"name": "data",
			"type": "json",
			"default": "{\n  \"orderBy\": [\n    null\n  ]\n}",
			"description": "Request for assignment filter evaluation for devices.",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Evaluate Assignment Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoft.graph.getAssignmentFiltersStatusDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Get Assignment Filters Status Details"
					]
				}
			}
		},
		{
			"displayName": "Assignment Filter Ids",
			"name": "assignmentFilterIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "assignmentFilterIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Get Assignment Filters Status Details"
					]
				}
			}
		},
		{
			"displayName": "Managed Device ID",
			"name": "managedDeviceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "managedDeviceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Get Assignment Filters Status Details"
					]
				}
			}
		},
		{
			"displayName": "Payload ID",
			"name": "payloadId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "payloadId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Get Assignment Filters Status Details"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Get Assignment Filters Status Details"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Get Assignment Filters Status Details"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Get Assignment Filters Status Details"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoft.graph.sendCustomNotificationToCompanyPortal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Send Custom Notification To Company Portal"
					]
				}
			}
		},
		{
			"displayName": "Groups To Notify",
			"name": "groupsToNotify",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupsToNotify",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Send Custom Notification To Company Portal"
					]
				}
			}
		},
		{
			"displayName": "Notification Body",
			"name": "notificationBody",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notificationBody",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Send Custom Notification To Company Portal"
					]
				}
			}
		},
		{
			"displayName": "Notification Title",
			"name": "notificationTitle",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notificationTitle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Send Custom Notification To Company Portal"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/microsoft.graph.createDownloadUrl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Microsoft Tunnel Server Log Collection Responses Microsoft Tunnel Server Log Collection Response Create Download URL"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/microsoft.graph.generateDownloadUrl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Microsoft Tunnel Server Log Collection Responses Microsoft Tunnel Server Log Collection Response Generate Download URL"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoft.graph.requestUpgrade",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Request Upgrade"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/microsoft.graph.createServerLogCollectionRequest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Create Server Log Collection Request"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "endDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Create Server Log Collection Request"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "startDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Create Server Log Collection Request"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/microsoft.graph.generateServerLogCollectionRequest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Generate Server Log Collection Request"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "endDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Generate Server Log Collection Request"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "startDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Generate Server Log Collection Request"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/microsoft.graph.getHealthMetricTimeSeries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Get Health Metric Time Series"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "endDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Get Health Metric Time Series"
					]
				}
			}
		},
		{
			"displayName": "Metric Name",
			"name": "metricName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "metricName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Get Health Metric Time Series"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "startDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Get Health Metric Time Series"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/microsoft.graph.getHealthMetrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Get Health Metrics"
					]
				}
			}
		},
		{
			"displayName": "Metric Names",
			"name": "metricNames",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "metricNames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Microsoft Tunnel Sites Microsoft Tunnel Site Microsoft Tunnel Servers Microsoft Tunnel Server Get Health Metrics"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/microsoft.graph.createDownloadUrl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events Mobile App Troubleshooting Event App Log Collection Requests App Log Collection Request Create Download URL"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/monitoring/alertRecords/{alertRecord-id}/microsoft.graph.deviceManagement.setPortalNotificationAsSent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Monitoring Alert Records Alert Record Set Portal Notification As Sent"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/microsoft.graph.sendTestMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Notification Message Templates Notification Message Template Send Test Message"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/oemWarrantyInformationOnboarding/{oemWarrantyInformationOnboarding-id}/microsoft.graph.disable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Oem Warranty Information Onboarding Oem Warranty Information Onboarding Disable"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/oemWarrantyInformationOnboarding/{oemWarrantyInformationOnboarding-id}/microsoft.graph.enable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Oem Warranty Information Onboarding Oem Warranty Information Onboarding Enable"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/microsoft.graph.beginOnboarding",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Remote Assistance Partners Remote Assistance Partner Begin Onboarding"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/microsoft.graph.disconnect",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Remote Assistance Partners Remote Assistance Partner Disconnect"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getActiveMalwareReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getActiveMalwareSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Active Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getAllCertificatesReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get All Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get All Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get All Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get All Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get All Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get All Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get All Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get All Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get All Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get All Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getAppStatusOverviewReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get App Status Overview Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get App Status Overview Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get App Status Overview Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get App Status Overview Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get App Status Overview Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get App Status Overview Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get App Status Overview Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get App Status Overview Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get App Status Overview Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get App Status Overview Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getAppsInstallSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Apps Install Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Apps Install Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Apps Install Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Apps Install Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Apps Install Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Apps Install Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Apps Install Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Apps Install Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Apps Install Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Apps Install Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getCachedReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Cached Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Cached Report"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Cached Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Cached Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Cached Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Cached Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Cached Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Cached Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getCertificatesReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Certificates Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getCompliancePoliciesReportForDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getCompliancePolicyDeviceSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getCompliancePolicyDevicesReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getCompliancePolicyNonComplianceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getCompliancePolicyNonComplianceSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getComplianceSettingDetailsReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getComplianceSettingNonComplianceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getComplianceSettingsReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Compliance Settings Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getConfigManagerDevicePolicyStatusReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Config Manager Device Policy Status Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Config Manager Device Policy Status Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Config Manager Device Policy Status Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Config Manager Device Policy Status Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Config Manager Device Policy Status Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Config Manager Device Policy Status Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Config Manager Device Policy Status Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Config Manager Device Policy Status Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Config Manager Device Policy Status Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Config Manager Device Policy Status Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getConfigurationPoliciesReportForDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policies Report For Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getConfigurationPolicyDeviceSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getConfigurationPolicyDevicesReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Devices Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getConfigurationPolicyNonComplianceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getConfigurationPolicyNonComplianceSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getConfigurationPolicySettingsDeviceSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Settings Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Settings Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Settings Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Settings Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Settings Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Settings Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Settings Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Settings Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Settings Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Policy Settings Device Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getConfigurationSettingDetailsReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Details Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getConfigurationSettingNonComplianceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getConfigurationSettingsReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Configuration Settings Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getDeviceConfigurationPolicySettingsSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Settings Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Settings Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Settings Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Settings Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Settings Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Settings Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Settings Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Settings Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Settings Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Settings Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getDeviceConfigurationPolicyStatusSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Status Summary"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Status Summary"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Status Summary"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Status Summary"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Status Summary"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Status Summary"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Status Summary"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Status Summary"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Status Summary"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Configuration Policy Status Summary"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getDeviceInstallStatusReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getDeviceManagementIntentPerSettingContributingProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Per Setting Contributing Profiles"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Per Setting Contributing Profiles"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Per Setting Contributing Profiles"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Per Setting Contributing Profiles"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Per Setting Contributing Profiles"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Per Setting Contributing Profiles"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Per Setting Contributing Profiles"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Per Setting Contributing Profiles"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Per Setting Contributing Profiles"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Per Setting Contributing Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getDeviceManagementIntentSettingsReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Management Intent Settings Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getDeviceNonComplianceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Device Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getDevicesWithoutCompliancePolicyReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Devices Without Compliance Policy Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Devices Without Compliance Policy Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Devices Without Compliance Policy Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Devices Without Compliance Policy Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Devices Without Compliance Policy Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Devices Without Compliance Policy Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Devices Without Compliance Policy Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Devices Without Compliance Policy Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Devices Without Compliance Policy Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Devices Without Compliance Policy Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getEncryptionReportForDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Encryption Report For Devices"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Encryption Report For Devices"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Encryption Report For Devices"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Encryption Report For Devices"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Encryption Report For Devices"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Encryption Report For Devices"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Encryption Report For Devices"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Encryption Report For Devices"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Encryption Report For Devices"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Encryption Report For Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getEnrollmentConfigurationPoliciesByDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Enrollment Configuration Policies By Device"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Enrollment Configuration Policies By Device"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Enrollment Configuration Policies By Device"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Enrollment Configuration Policies By Device"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Enrollment Configuration Policies By Device"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Enrollment Configuration Policies By Device"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Enrollment Configuration Policies By Device"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Enrollment Configuration Policies By Device"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Enrollment Configuration Policies By Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getFailedMobileAppsReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getFailedMobileAppsSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Failed Mobile Apps Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getGroupPolicySettingsDeviceSettingsReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Group Policy Settings Device Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Group Policy Settings Device Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Group Policy Settings Device Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Group Policy Settings Device Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Group Policy Settings Device Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Group Policy Settings Device Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Group Policy Settings Device Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Group Policy Settings Device Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Group Policy Settings Device Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Group Policy Settings Device Settings Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getHistoricalReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Historical Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Historical Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Historical Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Historical Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Historical Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Historical Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Historical Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Historical Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Historical Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getMalwareSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Malware Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getMobileApplicationManagementAppConfigurationReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Configuration Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Configuration Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Configuration Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Configuration Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Configuration Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Configuration Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Configuration Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Configuration Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Configuration Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Configuration Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getMobileApplicationManagementAppRegistrationSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Registration Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Registration Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Registration Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Registration Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Registration Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Registration Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Registration Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Registration Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Registration Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Mobile Application Management App Registration Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getNoncompliantDevicesAndSettingsReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Noncompliant Devices And Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Noncompliant Devices And Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Noncompliant Devices And Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Noncompliant Devices And Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Noncompliant Devices And Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Noncompliant Devices And Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Noncompliant Devices And Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Noncompliant Devices And Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Noncompliant Devices And Settings Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Noncompliant Devices And Settings Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getPolicyNonComplianceMetadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Metadata"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Metadata"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Metadata"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Metadata"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Metadata"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Metadata"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Metadata"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Metadata"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Metadata"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Metadata"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getPolicyNonComplianceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getPolicyNonComplianceSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Policy Non Compliance Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getQuietTimePolicyUserSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy User Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy User Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy User Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy User Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy User Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy User Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy User Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy User Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy User Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy User Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getQuietTimePolicyUsersReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy Users Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy Users Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy Users Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy Users Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy Users Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy Users Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy Users Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy Users Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy Users Report"
					]
				}
			}
		},
		{
			"displayName": "Skip Token",
			"name": "skipToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "skipToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy Users Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Quiet Time Policy Users Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getRelatedAppsStatusReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Related Apps Status Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Related Apps Status Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Related Apps Status Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Related Apps Status Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Related Apps Status Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Related Apps Status Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Related Apps Status Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Related Apps Status Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Related Apps Status Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Related Apps Status Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getRemoteAssistanceSessionsReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Remote Assistance Sessions Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Remote Assistance Sessions Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Remote Assistance Sessions Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Remote Assistance Sessions Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Remote Assistance Sessions Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Remote Assistance Sessions Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Remote Assistance Sessions Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Remote Assistance Sessions Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Remote Assistance Sessions Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Remote Assistance Sessions Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getReportFilters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Report Filters"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Report Filters"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Report Filters"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Report Filters"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Report Filters"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Report Filters"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Report Filters"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Report Filters"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Report Filters"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Report Filters"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getSettingNonComplianceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Setting Non Compliance Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getUnhealthyDefenderAgentsReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Defender Agents Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Defender Agents Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Defender Agents Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Defender Agents Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Defender Agents Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Defender Agents Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Defender Agents Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Defender Agents Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Defender Agents Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Defender Agents Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getUnhealthyFirewallReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getUnhealthyFirewallSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Unhealthy Firewall Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getUserInstallStatusReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get User Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get User Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get User Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get User Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get User Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get User Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get User Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get User Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get User Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get User Install Status Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getWindowsQualityUpdateAlertSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Quality Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getWindowsUpdateAlertSummaryReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alert Summary Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getWindowsUpdateAlertsPerPolicyPerDeviceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Windows Update Alerts Per Policy Per Device Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reports/microsoft.graph.getZebraFotaDeploymentReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Zebra Fota Deployment Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Zebra Fota Deployment Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Zebra Fota Deployment Report"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Zebra Fota Deployment Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Zebra Fota Deployment Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Zebra Fota Deployment Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Zebra Fota Deployment Report"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Zebra Fota Deployment Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Zebra Fota Deployment Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reports Get Zebra Fota Deployment Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/resourceAccessProfiles/microsoft.graph.queryByPlatformType",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Resource Access Profiles Query By Platform Type"
					]
				}
			}
		},
		{
			"displayName": "Platform Type",
			"name": "platformType",
			"type": "options",
			"default": "android",
			"description": "Supported platform types for policies.",
			"options": [
				{
					"name": "Android",
					"value": "android"
				},
				{
					"name": "Android For Work",
					"value": "androidForWork"
				},
				{
					"name": "I OS",
					"value": "iOS"
				},
				{
					"name": "Mac OS",
					"value": "macOS"
				},
				{
					"name": "Windows Phone 81",
					"value": "windowsPhone81"
				},
				{
					"name": "Windows 81 And Later",
					"value": "windows81AndLater"
				},
				{
					"name": "Windows 10 And Later",
					"value": "windows10AndLater"
				},
				{
					"name": "Android Work Profile",
					"value": "androidWorkProfile"
				},
				{
					"name": "Windows 10 X Profile",
					"value": "windows10XProfile"
				},
				{
					"name": "Android AOSP",
					"value": "androidAOSP"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"routing": {
				"send": {
					"property": "platformType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Resource Access Profiles Query By Platform Type"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Resource Access Profiles Device Management Resource Access Profile Base Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Resource Access Profiles Device Management Resource Access Profile Base Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/microsoft.graph.clone",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reusable Policy Settings Device Management Reusable Policy Setting Clone"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reusable Policy Settings Device Management Reusable Policy Setting Referencing Configuration Policies Device Management Configuration Policy Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reusable Policy Settings Device Management Reusable Policy Setting Referencing Configuration Policies Device Management Configuration Policy Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/microsoft.graph.createCopy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reusable Policy Settings Device Management Reusable Policy Setting Referencing Configuration Policies Device Management Configuration Policy Create Copy"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reusable Policy Settings Device Management Reusable Policy Setting Referencing Configuration Policies Device Management Configuration Policy Create Copy"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reusable Policy Settings Device Management Reusable Policy Setting Referencing Configuration Policies Device Management Configuration Policy Create Copy"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/microsoft.graph.reorder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reusable Policy Settings Device Management Reusable Policy Setting Referencing Configuration Policies Device Management Configuration Policy Reorder"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Reusable Policy Settings Device Management Reusable Policy Setting Referencing Configuration Policies Device Management Configuration Policy Reorder"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/roleScopeTags/microsoft.graph.getRoleScopeTagsById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Role Scope Tags Get Role Scope Tags By ID"
					]
				}
			}
		},
		{
			"displayName": "Role Scope Tag Ids",
			"name": "roleScopeTagIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "roleScopeTagIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Role Scope Tags Get Role Scope Tags By ID"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Role Scope Tags Role Scope Tag Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Role Scope Tags Role Scope Tag Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/microsoft.graph.importOffice365DeviceConfigurationPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Templates Import Office 365 Device Configuration Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/microsoft.graph.createInstance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Templates Device Management Template Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Templates Device Management Template Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Templates Device Management Template Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Role Scope Tag Ids",
			"name": "roleScopeTagIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "roleScopeTagIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Templates Device Management Template Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Settings Delta",
			"name": "settingsDelta",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "settingsDelta",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Templates Device Management Template Create Instance"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/microsoft.graph.importOffice365DeviceConfigurationPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Templates Device Management Template Migratable To Import Office 365 Device Configuration Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/microsoft.graph.createInstance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Templates Device Management Template Migratable To Device Management Template Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Templates Device Management Template Migratable To Device Management Template Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Templates Device Management Template Migratable To Device Management Template Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Role Scope Tag Ids",
			"name": "roleScopeTagIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "roleScopeTagIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Templates Device Management Template Migratable To Device Management Template Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Settings Delta",
			"name": "settingsDelta",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "settingsDelta",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Templates Device Management Template Migratable To Device Management Template Create Instance"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/tenantAttachRBAC/microsoft.graph.enable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Tenant Attach RBAC Enable"
					]
				}
			}
		},
		{
			"displayName": "Enable",
			"name": "enable",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "enable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Tenant Attach RBAC Enable"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsDeviceScope/microsoft.graph.triggerDeviceScopeAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management User Experience Analytics Device Scope Trigger Device Scope Action"
					]
				}
			}
		},
		{
			"displayName": "Action Name",
			"name": "actionName",
			"type": "string",
			"default": "",
			"description": "Trigger on the service to either START or STOP computing metrics data based on a device scope configuration.",
			"routing": {
				"send": {
					"property": "actionName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management User Experience Analytics Device Scope Trigger Device Scope Action"
					]
				}
			}
		},
		{
			"displayName": "Device Scope ID",
			"name": "deviceScopeId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deviceScopeId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management User Experience Analytics Device Scope Trigger Device Scope Action"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}/microsoft.graph.triggerDeviceScopeAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management User Experience Analytics Device Scopes User Experience Analytics Device Scope Trigger Device Scope Action"
					]
				}
			}
		},
		{
			"displayName": "Action Name",
			"name": "actionName",
			"type": "string",
			"default": "",
			"description": "Trigger on the service to either START or STOP computing metrics data based on a device scope configuration.",
			"routing": {
				"send": {
					"property": "actionName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management User Experience Analytics Device Scopes User Experience Analytics Device Scope Trigger Device Scope Action"
					]
				}
			}
		},
		{
			"displayName": "Device Scope ID",
			"name": "deviceScopeId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deviceScopeId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management User Experience Analytics Device Scopes User Experience Analytics Device Scope Trigger Device Scope Action"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/microsoft.graph.changeUserAccountType",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Change User Account Type"
					]
				}
			}
		},
		{
			"displayName": "User Account Type",
			"name": "userAccountType",
			"type": "options",
			"default": "standardUser",
			"options": [
				{
					"name": "Standard User",
					"value": "standardUser"
				},
				{
					"name": "Administrator",
					"value": "administrator"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "userAccountType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Change User Account Type"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/microsoft.graph.endGracePeriod",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC End Grace Period"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/microsoft.graph.reboot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Reboot"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/microsoft.graph.rename",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Rename"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Rename"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/microsoft.graph.reprovision",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Reprovision"
					]
				}
			}
		},
		{
			"displayName": "Os Version",
			"name": "osVersion",
			"type": "options",
			"default": "windows10",
			"options": [
				{
					"name": "Windows 10",
					"value": "windows10"
				},
				{
					"name": "Windows 11",
					"value": "windows11"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "osVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Reprovision"
					]
				}
			}
		},
		{
			"displayName": "User Account Type",
			"name": "userAccountType",
			"type": "options",
			"default": "standardUser",
			"options": [
				{
					"name": "Standard User",
					"value": "standardUser"
				},
				{
					"name": "Administrator",
					"value": "administrator"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "userAccountType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Reprovision"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/microsoft.graph.restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Restore"
					]
				}
			}
		},
		{
			"displayName": "Cloud Pc Snapshot ID",
			"name": "cloudPcSnapshotId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "cloudPcSnapshotId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Restore"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/microsoft.graph.retryPartnerAgentInstallation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Retry Partner Agent Installation"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/microsoft.graph.troubleshoot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Cloud P Cs Cloud PC Troubleshoot"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}/microsoft.graph.reupload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Device Images Cloud Pc Device Image Reupload"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/microsoft.graph.runHealthChecks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint On Premises Connections Cloud Pc On Premises Connection Run Health Checks"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/microsoft.graph.updateAdDomainPassword",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint On Premises Connections Cloud Pc On Premises Connection Update Ad Domain Password"
					]
				}
			}
		},
		{
			"displayName": "Ad Domain Password",
			"name": "adDomainPassword",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "adDomainPassword",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint On Premises Connections Cloud Pc On Premises Connection Update Ad Domain Password"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies Cloud Pc Provisioning Policy Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Provisioning Policies Cloud Pc Provisioning Policy Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/reports/microsoft.graph.getDailyAggregatedRemoteConnectionReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Daily Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Daily Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Daily Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Daily Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Daily Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Daily Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Daily Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Daily Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/reports/microsoft.graph.getRemoteConnectionHistoricalReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Remote Connection Historical Reports"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Remote Connection Historical Reports"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Remote Connection Historical Reports"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Remote Connection Historical Reports"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Remote Connection Historical Reports"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Remote Connection Historical Reports"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Remote Connection Historical Reports"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Remote Connection Historical Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/reports/microsoft.graph.getSharedUseLicenseUsageReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Shared Use License Usage Report"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Shared Use License Usage Report"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Shared Use License Usage Report"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Shared Use License Usage Report"
					]
				}
			}
		},
		{
			"displayName": "Report Name",
			"name": "reportName",
			"type": "options",
			"default": "remoteConnectionHistoricalReports",
			"options": [
				{
					"name": "Remote Connection Historical Reports",
					"value": "remoteConnectionHistoricalReports"
				},
				{
					"name": "Daily Aggregated Remote Connection Reports",
					"value": "dailyAggregatedRemoteConnectionReports"
				},
				{
					"name": "Total Aggregated Remote Connection Reports",
					"value": "totalAggregatedRemoteConnectionReports"
				},
				{
					"name": "Shared Use License Usage Report",
					"value": "sharedUseLicenseUsageReport"
				},
				{
					"name": "Shared Use License Usage Real Time Report",
					"value": "sharedUseLicenseUsageRealTimeReport"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "reportName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Shared Use License Usage Report"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Shared Use License Usage Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Shared Use License Usage Report"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Shared Use License Usage Report"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Shared Use License Usage Report"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/reports/microsoft.graph.getTotalAggregatedRemoteConnectionReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Total Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Total Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Total Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "orderBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Total Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Total Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "select",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Total Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "skip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Total Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint Reports Get Total Aggregated Remote Connection Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings Cloud Pc User Setting Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Virtual Endpoint User Settings Cloud Pc User Setting Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeploymentProfiles/microsoft.graph.hasPayloadLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "Payload Ids",
			"name": "payloadIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "payloadIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Has Payload Links"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/microsoft.graph.assignResourceAccountToDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Assign Resource Account To Device"
					]
				}
			}
		},
		{
			"displayName": "Addressable User Name",
			"name": "addressableUserName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "addressableUserName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Assign Resource Account To Device"
					]
				}
			}
		},
		{
			"displayName": "Resource Account Name",
			"name": "resourceAccountName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "resourceAccountName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Assign Resource Account To Device"
					]
				}
			}
		},
		{
			"displayName": "User Principal Name",
			"name": "userPrincipalName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userPrincipalName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Assign Resource Account To Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/microsoft.graph.assignUserToDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Assign User To Device"
					]
				}
			}
		},
		{
			"displayName": "Addressable User Name",
			"name": "addressableUserName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "addressableUserName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Assign User To Device"
					]
				}
			}
		},
		{
			"displayName": "User Principal Name",
			"name": "userPrincipalName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userPrincipalName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Assign User To Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/microsoft.graph.unassignResourceAccountFromDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Unassign Resource Account From Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/microsoft.graph.unassignUserFromDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Unassign User From Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/microsoft.graph.updateDeviceProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "Addressable User Name",
			"name": "addressableUserName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "addressableUserName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "Device Account Password",
			"name": "deviceAccountPassword",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deviceAccountPassword",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "Device Account Upn",
			"name": "deviceAccountUpn",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deviceAccountUpn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "Device Friendly Name",
			"name": "deviceFriendlyName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deviceFriendlyName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "Group Tag",
			"name": "groupTag",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupTag",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "User Principal Name",
			"name": "userPrincipalName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userPrincipalName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assigned Devices Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assign"
					]
				}
			}
		},
		{
			"displayName": "Device Ids",
			"name": "deviceIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "deviceIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Deployment Profiles Windows Autopilot Deployment Profile Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/microsoft.graph.assignResourceAccountToDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Assign Resource Account To Device"
					]
				}
			}
		},
		{
			"displayName": "Addressable User Name",
			"name": "addressableUserName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "addressableUserName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Assign Resource Account To Device"
					]
				}
			}
		},
		{
			"displayName": "Resource Account Name",
			"name": "resourceAccountName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "resourceAccountName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Assign Resource Account To Device"
					]
				}
			}
		},
		{
			"displayName": "User Principal Name",
			"name": "userPrincipalName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userPrincipalName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Assign Resource Account To Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/microsoft.graph.assignUserToDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Assign User To Device"
					]
				}
			}
		},
		{
			"displayName": "Addressable User Name",
			"name": "addressableUserName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "addressableUserName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Assign User To Device"
					]
				}
			}
		},
		{
			"displayName": "User Principal Name",
			"name": "userPrincipalName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userPrincipalName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Assign User To Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/microsoft.graph.unassignResourceAccountFromDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Unassign Resource Account From Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/microsoft.graph.unassignUserFromDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Unassign User From Device"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/microsoft.graph.updateDeviceProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "Addressable User Name",
			"name": "addressableUserName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "addressableUserName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "Device Account Password",
			"name": "deviceAccountPassword",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deviceAccountPassword",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "Device Account Upn",
			"name": "deviceAccountUpn",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deviceAccountUpn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "Device Friendly Name",
			"name": "deviceFriendlyName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deviceFriendlyName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "Group Tag",
			"name": "groupTag",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupTag",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "User Principal Name",
			"name": "userPrincipalName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userPrincipalName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Device Identities Windows Autopilot Device Identity Update Device Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsAutopilotSettings/microsoft.graph.sync",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Autopilot Settings Sync"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Windows Driver Update Profile Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Windows Driver Update Profile Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/microsoft.graph.executeAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Windows Driver Update Profile Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Action Name",
			"name": "actionName",
			"type": "options",
			"default": "approve",
			"description": "An enum type to represent approval actions of single or list of drivers.",
			"options": [
				{
					"name": "Approve",
					"value": "approve"
				},
				{
					"name": "Decline",
					"value": "decline"
				},
				{
					"name": "Suspend",
					"value": "suspend"
				}
			],
			"routing": {
				"send": {
					"property": "actionName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Windows Driver Update Profile Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Deployment Date",
			"name": "deploymentDate",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deploymentDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Windows Driver Update Profile Execute Action"
					]
				}
			}
		},
		{
			"displayName": "Driver Ids",
			"name": "driverIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "driverIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Windows Driver Update Profile Execute Action"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/microsoft.graph.syncInventory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Driver Update Profiles Windows Driver Update Profile Sync Inventory"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles Windows Feature Update Profile Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles Windows Feature Update Profile Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Quality Update Profiles Windows Quality Update Profile Assign"
					]
				}
			}
		},
		{
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Windows Quality Update Profiles Windows Quality Update Profile Assign"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/zebraFotaConnector/microsoft.graph.approveFotaApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Zebra Fota Connector Approve Fota Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/zebraFotaConnector/microsoft.graph.connect",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Zebra Fota Connector Connect"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/zebraFotaConnector/microsoft.graph.disconnect",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Zebra Fota Connector Disconnect"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/zebraFotaConnector/microsoft.graph.hasActiveDeployments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Zebra Fota Connector Has Active Deployments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Actions"
					],
					"operation": [
						"Device Management Zebra Fota Deployments Zebra Fota Deployment Cancel"
					]
				}
			}
		},
];
